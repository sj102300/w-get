import db from '../../utils/database'

export default async function HandleMyCoupons(req,res){

    if(req.method === 'GET'){
        let userid = req.headers.userid;
        
        let myCoupons = await db.user_coupon.findMany({
            where: {
                userid: userid
            },
            include: {
                coupons: true,
            }
        })

        res.status(200).json({ myCoupons });

    }

}