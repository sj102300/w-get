
import Headerbar from '@/app/headerbar';
import './records.scss';

import Image from 'next/image';


function Records(){

    let records = [
        {
        date: '8.3',
        title: '쿠폰 구매',
        detail: '치킨 3000원 할인 쿠폰 발급',
        point: '- 500 P',
        plus: false
    },
        {
            date: '8.3',
            title: '플로깅 완료 포인트',
            detail: '',
            point: '+ 200 P',
            plus: true
        },
        {
            date: '8.1',
            title: '플로깅 완료 포인트',
            detail: '',
            point: '+ 500 P',
            plus: true
        },
        {
            date: '7.29',
            title: '플로깅 완료 포인트',
            detail: '',
            point: '+ 100 P',
            plus: true
        },
        {
            date: '7.28',
            title: '플로깅 완료 포인트',
            detail: '',
            point: '+ 200 P',
            plus: true
        },
        {
            date: '7.23',
            title: '플로깅 완료 포인트',
            detail: '',
            point: '+ 150 P',
            plus: true
        },
        {
            date: '7.19',
            title: '플로깅 완료 포인트',
            detail: '',
            point: '+ 350 P',
            plus: true
        },
        {
            date: '7.17',
            title: '플로깅 완료 포인트',
            detail: '',
            point: '+ 500 P',
            plus: true
        },
    ]

    return(
        <div className='w-full h-full'>
        <Headerbar title={'포인트 내역'} color={'#fff'}/>
        <div className='records'>
            <div className="my-point">
                <p>내 포인트</p>
                <h2>1500 POINT</h2>
            </div>
            <div className="today-point">
                <Image width={42} height={42} alt='엄지척' src="/images/good.png" />
                <div>
                    <p>이깨끗님,</p>
                    <h3>오늘은 200 포인트를 받았어요.</h3>
                </div>
            </div>
            <div className='thick-line'></div>
            <div className="items-container">
                {
                    records.map(e=><OneItem data={e}/>)
                }
            </div>
        </div>
        </div>
    )
}

function OneItem({data}){

    return(
        <div className='item'>
                    <p>{data.date}</p>
                    <div className="point-text">
                        <h3>{data.title}</h3>
                        <p>{data.detail}</p>
                    </div>
                    <h3 className={data.plus? 'green' : 'orange'}>{data.point}</h3>
                </div>
    )
}


export default Records;