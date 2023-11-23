import Headerbar from "@/app/headerbar";

import './mycoupons.scss'


function MyCoupons() {

    let coupons = [
        {
            itemName: '치킨 3000원 할인',
            storeName: '인근주민 상도점',
            storeLocation: '동작구 양녕로',
            point: 500
        }, {
            itemName: '라면',
            storeName: '준호네 즉석떡볶이 본점',
            storeLocation: '동작구 흑석로',
            point: 1000
        },
    ]

    return (
        <div>
            <Headerbar title={'내 쿠폰함'} color={'#fff'} />
            <div className="my-coupons">
                { coupons.map( e => <Coupon data={e}/> ) }
            </div>
        </div>
    )
}


function Coupon({data}) {

    return (
        <div className="coupon">
            <div className="coupon-left">
                <h1>{data.itemName}</h1>
                <p>{data.storeName}</p>
                <p>{data.storeLocation}</p>
                <h4>쿠폰 사용시 제시 해주세요.</h4>
            </div>
            <div className="coupon-right">
                <h1>{data.point}P</h1>
            </div>
        </div>
    )
}


export default MyCoupons;