import db from '../../utils/database'

export default async function Meets(req,res){

    //게시글 작성
    if(req.method === "POST"){
        let userid = req.headers.userid;
        let body = JSON.parse(req.body);

        //body에 있는 daytime이 KST인데 UTC로 해석하니까 KST로 바꿔줘야함
        let KSTdaytime = new Date(body.daytime);
        KSTdaytime.setHours(KSTdaytime.getHours() + 9);

        let newMeet = await db.meets.create({
            data: {
                leaderid: userid,
                title: body.title,
                content: body.content,
                daytime: KSTdaytime,
                address: body.address,
                lat: Number(body.lat),
                lng: Number(body.lng),
                jibun: body.jibun,
                max_num: body.maxNum,
                current_num: 1,
                status: '모집중'
            }
        })

        let newUserMeet = await db.user_meets.create({
            data: {
                userid: userid,
                meetsid: newMeet.id
            }
        })
        
        res.status(200).json({ newMeet });
    }

    if(req.method === 'DELETE'){
        let meetsid = JSON.parse(req.body).meetsid;

        let targetUserMeets = await db.user_meets.deleteMany({
            where: {
                meetsid: meetsid,
            }
        })

        let targetMeets = await db.meets.delete({
            where:{
                id: meetsid,
            }
        })

        res.status(204).json();

    }

}