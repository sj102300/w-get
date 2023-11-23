
import Headerbar from '@/app/headerbar';
import './detail.scss';
import JoinBtn from './joinbtn';
import Image from 'next/image';

function Detail(){

    //서버 컴포넌트라면 그대로 db에 가서 데이터 꺼내오기 -> 나중에 코드 고쳐보던 말던 알아서

    let data = {
        id: 1,
        leader:'깅로플',
        imgSrc: '/images/Woman Running.png',
        status: '모집중',
        title: '경복궁 근처 플로깅 모집!!',
        content: '경복궁 근처 쓰레기 줍고 담소 나눠요 ~~',
        location: '경복궁역',
        time: new Date('2023-08-11 10:30:00'),
        num:3,
        maxNum:6
    };


    return(
        <div className="detail">
            <Headerbar title={data.title} color={'#fff'} />
            <div className="top-container">
                <div className='emoji'><h1>🏃‍♀️</h1></div>
                <div className='w-full info text-[#464646]'>
                    <span className="mr-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M7.50004 13.1C7.50004 13.1 11.8827 9.20436 11.8827 6.28262C11.8827 3.86217 9.92049 1.90001 7.50004 1.90001C5.07959 1.90001 3.11743 3.86217 3.11743 6.28262C3.11743 9.20436 7.50004 13.1 7.50004 13.1Z" stroke="#464646" />
                            <path d="M8.90022 6.1001C8.90022 6.8733 8.27342 7.5001 7.50022 7.5001C6.72702 7.5001 6.10022 6.8733 6.10022 6.1001C6.10022 5.3269 6.72702 4.7001 7.50022 4.7001C8.27342 4.7001 8.90022 5.3269 8.90022 6.1001Z" stroke="#464646" />
                        </svg>
                        <p>{data.location}</p>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M3.70833 5.69998H11.875M4.76389 2.25V3.15011M10.7083 2.25V3.15M10.7083 3.15H4.875C3.9085 3.15 3.125 3.95588 3.125 4.94999V10.95C3.125 11.9441 3.9085 12.75 4.875 12.75H10.7083C11.6748 12.75 12.4583 11.9441 12.4583 10.95L12.4583 4.94999C12.4583 3.95588 11.6748 3.15 10.7083 3.15ZM6.33333 9.29999L7.20833 10.2L9.25 8.1" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>{`${data.time.getMonth()}월 ${data.time.getDate()}일 ${data.time.getHours()}시 ${data.time.getMinutes()}분`}</p>
                    </span>
                </div>
            </div>

            <div className='bottom-container'>
                <h4>플로깅 리더</h4>
                <p>{data.leader}</p>
                <h4>위치</h4>
                <p>{data.location}</p>
                <h4>인원</h4>
                <p>{`${data.num}/${data.maxNum}`}</p>
                <h4>소개글</h4>
                <p>{data.content}</p>
            </div>

            <JoinBtn />

        </div>
    )
}


export default Detail;