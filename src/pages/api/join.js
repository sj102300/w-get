import db from '../../utils/database'

export default async function getMeetsJoinList(req, res){

    if(req.method === 'GET'){
        let userid = req.headers.userid;

        let joinList = await db.user_meets.findMany({
            where:{
                meetsid: req.query.id
            },
            select:{
                userid: true
            }
        })

        //로그인안한 상태여도 userid가 undefined라 여기 false로 반환되겠네 그래서 노상관
        let isJoin = joinList.some((e)=>{ return e.userid === userid });

        let joinNameList = await Promise.all(
            joinList.map(async (e)=>{
                let user = await db.users.findUnique({
                    where: {
                        id: e.userid,
                    },
                    select: {
                        name: true,
                    }
                })
                return user.name
            })
        )

        res.status(200).json({ isJoin, joinList, joinNameList })
    }


    if(req.method === 'POST'){
        let userid = req.headers.userid;
        let meetsid = JSON.parse(req.body).meetsid;

        let meets = await db.meets.findUnique({
            where:{
                id: meetsid,
            }
        })

        if(meets.current_num < meets.max_num){
            await db.user_meets.create({
                data:{
                    userid: userid,
                    meetsid: meetsid
                }
            });
            let targetMeets = await db.meets.update({
                where: {
                    id: meetsid,
                },
                data: {
                    current_num: {
                        increment: 1,
                    }
                },
            })
            res.status(200).json({ targetMeets });
        }
        else{
            res.status(200).json({ message: "모집 마감되었습니다!"})
        }
    }

    if(req.method === 'PATCH'){
        let userid = req.headers.userid;
        let meetsid = JSON.parse(req.body).meetsid;

        await db.user_meets.delete({
            where: {
                meetsid_userid: { meetsid, userid }
            },
        });
        let targetMeets = await db.meets.update({
            where:{
                id: meetsid,
            },
            data:{
                current_num: {
                    decrement: 1,
                }
            }
        })

        res.status(200).json({ targetMeets })
    }

}