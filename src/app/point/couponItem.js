'use client';

import Link from "next/link";



function CouponItem({ data, point }) {

    return (
        <div className='item'>
            <div>
                <p>{data.storename}</p>
                <p>{data.address}</p>
                <p>{data.content}</p>
                <h2>{data.required_point + ' POINT'}</h2>
            </div>
            <Link className="receive" href="/point/mycoupons">
                <p onClick={() => {
                    if (point < data.required_point) {
                        window.alert('포인트가 부족합니다!')
                    }
                    else {
                        let accessToken = sessionStorage.getItem('accessToken');
                        fetch('/api/coupons', {
                            method: "POST",
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                            body: JSON.stringify({
                                couponid: data.id
                            }),
                        }).then((response) => {
                            return response.json();
                        }).then((result) => {
                            console.log(result);
                        })
                        window.alert('쿠폰이 발급되었습니다. 쿠폰함을 확인해주세요!');
                    }
                }}>쿠폰받기</p>
            </Link>
        </div>

    )
}

export default CouponItem;

// import {toast, Slide} from "react-toastify";
// toast('쿠폰받기 완료!', { hideProgressBar: true, autoClose: 1000, type: 'success', style: {margin:'10px', borderRadius: '5px'}, transition : Slide })
