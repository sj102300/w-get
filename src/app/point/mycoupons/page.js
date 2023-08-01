import Headerbar from "@/app/headerbar";

import './mycoupons.scss'


function MyCoupons() {

    return (
        <div>
            <Headerbar title={'내 쿠폰함'} color={'#fff'} />
            <div className="my-coupons">
                <Coupon />
                <Coupon />
                <Coupon />
                <Coupon />
                <Coupon />
                <Coupon />
                <Coupon />
                <Coupon />
                <Coupon />
            </div>
        </div>
    )
}


function Coupon() {

    return (
        <div className="coupon">
            <div className="coupon-left">
                <h1>제품 이름</h1>
                <p>가게 이름</p>
                <p>가게 위치</p>
                <h4>쿠폰 사용시 제시 해주세요.</h4>
            </div>
            <div className="coupon-right">
                <h1>200P</h1>
            </div>
        </div>
    )
}


export default MyCoupons;