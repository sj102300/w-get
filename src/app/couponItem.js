'use client';
import {toast} from "react-toastify";


function CouponItem({ data }) {

    return (
        <div className='item'>
            <img src={data.imgsrc} alt="가게 사진" />
            <div>
                <p>{data.name}</p>
                <p>{data.loc}</p>
                <p>{data.content}</p>
                <h2>{data.point+' POINT'}</h2>
            </div>
            <p onClick={()=>{
                toast('쿠폰받기 완료!', { hideProgressBar: true, autoClose: 2000, type: 'success' })
            }} className='receive'>쿠폰받기</p>
        </div>

    )
}

export default CouponItem;