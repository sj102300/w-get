'use client';
import {toast, Slide} from "react-toastify";


function CouponItem({ data, point }) {

    return (
        <div className='item'>
            <div>
                <p>{data.storename}</p>
                <p>{data.address}</p>
                <p>{data.content}</p>
                <h2>{data.required_point+' POINT'}</h2>
            </div>
            <p onClick={()=>{
                if(point < data.required_point){
                    window.alert('포인트가 부족합니다!')
                }
                else{
                    let accessToken = sessionStorage.getItem('accessToken');
                    fetch('/api/coupons', {
                        method: "POST",
                        headers: {
                            Authorization : `Bearer ${accessToken}`,
                        },
                        body: JSON.stringify({
                            couponid: data.id
                        }),
                    }).then((response)=>{
                        return response.json();
                    }).then((result)=>{
                        console.log(result);
                    })
                    toast('쿠폰받기 완료!', { hideProgressBar: true, autoClose: 2000, type: 'success', style: {margin:'10px', borderRadius: '5px'}, transition : Slide })
                }}} className='receive'>쿠폰받기</p>
        </div>

    )
}

export default CouponItem;