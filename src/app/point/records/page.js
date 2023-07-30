
import Headerbar from '@/app/headerbar';
import './records.scss';

import Image from 'next/image';


function Records(){

    return(
        <div className='w-full h-full'>
        <Headerbar title={'포인트 내역'} color={'#fff'}/>
        <div className='records'>
            <div className="my-point">
                <p>내 포인트</p>
                <h2>2000 POINT</h2>
            </div>
            <div className="today-point">
                <Image width={42} height={42} alt='엄지척' src="/images/good.png" />
                <div>
                    <p>이깨끗님,</p>
                    <h3>오늘은 00포인트를 받았어요.</h3>
                </div>
            </div>
            <div className='thick-line'></div>
            <div className="items-container">
                <OneItem />
                <OneItem />
                <OneItem />
                <OneItem />
                <OneItem />
                <OneItem />
                <OneItem />
                <OneItem />
            </div>
        </div>
        </div>
    )
}

function OneItem(){

    return(
        <div className='item'>
                    <p>7.28</p>
                    <div className="point-text">
                        <h3>포인트 이름</h3>
                        <p>포인트 상세 내역</p>
                    </div>
                    <h3>+ 0 P</h3>
                </div>
    )
}


export default Records;