import db from "../../utils/database"


export default async function HandlePointLog(req, res) {

    if(req.method === 'GET'){
        let userid = req.headers.userid;

        let pointLogs = await db.user_point_log.findMany({
            where:{
                userid: userid
            },
            orderBy:{
                day: "desc"
            }
            
        })

        res.status(200).json({ pointLogs });

    }
    
}