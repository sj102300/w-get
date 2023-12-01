import db from '../../utils/database'


export default async function getMyPageInfo(req, res) {

    let userid = req.headers.userid;

    if(req.method === "GET"){
        
        const user = await db.users.findUnique({
            where: {
                id: userid
            }
        })
        if(!user){
            res.status(404).json({ message: "등록된 유저가 없습니다." });
        }
        const userPloggingInfo = await db.user_plogging_info.findUnique({
            where:{
                userid: userid
            }
        })
        const data = { 
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address,
                introduction: user.introduction,
            },
            userPloggingInfo 
        };
        res.status(200).json(data);
    
    }

    if(req.method === "DELETE"){
        //회원탈퇴
        // await db.user_plogging_info.delete({
        //     where:{
        //         userid: userid
        //     }
        // })
        // await db.users.delete({
        //     where: {
        //         id: userid
        //     }
        // })
        // if(!user){
        //     res.status(404).json({message: "등록된 유저가 아닙니다." });
        // }
    }


}