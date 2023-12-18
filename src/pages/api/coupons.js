import db from '../../utils/database';

export default async function Coupons(req, res){
    
    if(req.method === 'GET') {
        let userid = req.headers.userid;

        let address = req.query.address;

        let coupons = await db.coupons.findMany({})

        res.status(200).json({ coupons });

    }

    if(req.method === 'POST'){
        let userid = req.headers.userid;
        let couponid = JSON.parse(req.body).couponid;

        let targetCoupon = await db.coupons.findUnique({
            where: {
                id: couponid
            }
        })

        let targetUser = await db.user_plogging_info.update({
            where: {
                userid: userid,
            },
            data: {
                point: {
                    decrement: targetCoupon.required_point
                }
            }
        })

        let newCoupon = await db.user_coupon.create({
            data:{
                userid: userid,
                couponid: couponid,
            }
        })

        let newPointLog = await db.user_point_log.create({
            data:{
                userid: userid,
                title: targetCoupon.storename + '쿠폰 발급',
                point_info: -Number(targetCoupon.required_point),
                content: targetCoupon.content
            }
        })

        res.status(200).json({ newCoupon, newPointLog })
    }
    
}