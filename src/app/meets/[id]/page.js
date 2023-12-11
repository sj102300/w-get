
import Headerbar from '@/app/headerbar';
import './detail.scss';
import JoinBtn from './joinbtn';
import db from '../../../utils/database'
import KakaoMap from './kakaomap';

async function Detail(props) {

    // 서버 컴포넌트식으로 정보 잘 받아와서 잘 넣기, 조인버튼만 client component

    let id = props.params.id;

    let meets = await db.meets.findUnique({
        where: {
            id: id
        },
    })

    let leader = await db.users.findUnique({
        where: {
            id: meets.leaderid,
        },
        select: {
            id: true,
            name: true,
        }
    })

    meets.daytime.setHours(meets.daytime.getHours() - 9);
    let year = meets.daytime.getFullYear();
    let month = meets.daytime.getMonth() + 1;
    let day = meets.daytime.getDate();
    let hour = meets.daytime.getHours();
    let minute = meets.daytime.getMinutes();


    return (
        <div className="detail">
            <Headerbar title={meets.title} color={'#fff'} />
            <div className="top-container">
                <div className='map'>
                    <KakaoMap lat={Number(meets.lat)} lng={Number(meets.lng)}/>
                </div>
                <div className='w-full info text-[#464646]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M3.70833 5.69998H11.875M4.76389 2.25V3.15011M10.7083 2.25V3.15M10.7083 3.15H4.875C3.9085 3.15 3.125 3.95588 3.125 4.94999V10.95C3.125 11.9441 3.9085 12.75 4.875 12.75H10.7083C11.6748 12.75 12.4583 11.9441 12.4583 10.95L12.4583 4.94999C12.4583 3.95588 11.6748 3.15 10.7083 3.15ZM6.33333 9.29999L7.20833 10.2L9.25 8.1" stroke="#464646" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>{`${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`}</p>
                </div>
            </div>

            <div className='bottom-container'>
                <h4>플로깅 리더</h4>
                <p>{leader.name}</p>
                <h4>위치</h4>
                <p>{meets.address}</p>
                <h4>소개글</h4>
                <p>{meets.content}</p>
                <JoinBtn isMine={leader.id === meets.leaderid} current_num={meets.current_num} max_num={meets.max_num} id={meets.id} />
            </div>

        </div>
    )
}


export default Detail;