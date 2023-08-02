
import Headerbar from '../headerbar';
import './store.scss';
import Link from 'next/link';
import Image from 'next/image';
import CouponItem from '../couponItem';


function Store() {

    let couponData = [
        {
            imgsrc:'/images/Rectangle 607.png',
            name:'인근주민 상도점',
            loc:'동작구 양녕로',
            content:'치킨 3000원 할인',
            point: 500
        },{
            imgsrc:'/images/Rectangle 609.png',
            name:'잔디속에있다고상상을해',
            loc:'동작구 상도로',
            content:'구운 가래떡과 꿀',
            point: 2000
        },{
            imgsrc:'/images/Rectangle 610.png',
            name:'선김밥 상도본점',
            loc:'동작구 상도로',
            content:'선김밥',
            point: 1500
        },{
            imgsrc:'/images/Rectangle 611.png',
            name:'준호네즉석떡볶이 본점',
            loc:'동작구 흑석로',
            content:'라면',
            point: 1000
        },
    ]

    return (
        <div>
            <Headerbar title={'포인트 스토어'} color={'#fff'} />
            <div className='store'>
                <Link href="/point/records">
                    <div className='my-point'>
                        <div>
                            <p>이깨끗님의 포인트</p>
                            <h2>2000 POINT</h2>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 7L15 12L10 17" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                </Link>
                <Link href="/point/mycoupons">
                    <div className='my-coupon'>
                        <p>내 쿠폰 보기</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 7L15 12L10 17" stroke="#A2A2A2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Link>
                <div className='thick-line'></div>
                <div className='container'>
                    <div className='title'>
                        <div>
                            <h1>이깨끗님,</h1>
                            <h2>우리동네 가게 쿠폰을 교환해보세요!</h2>
                        </div>
                        <Image width={'86'} height={'86'} alt="동전 이미지" src='/images/coins.png' />
                    </div>
                    <div className='content'>
                        {
                            couponData.map((i)=>{
                                return(<CouponItem data={i}/>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Store;