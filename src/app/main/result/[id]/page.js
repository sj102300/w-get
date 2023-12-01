import "./result.scss";
import Image from "next/image";
import earthImg from '/public/images/EarthImg.png'
import Link from "next/link";
import db from '../../../../utils/database'

async function Result(props) {


    let log = await db.plogging_log.findUnique({
        where : {
            id: props.params.id
        }
    })

    let hour = Math.floor(Number(log.accumulated_time / 60 / 60));
    let minute = Math.floor(Number(log.accumulated_time / 60 % 60));
    let point = Math.floor(Number(log.accumulated_time /60));

    return (
        <div className="result-page">
            <p className="msg">지구가 더 깨끗해졌어요!</p>
            <Image className="earth-img" src={earthImg} alt="지구 이미지" />
            <div className="point-list">
                <div className="point-item">
                    <p className="title">{hour > 0 ? `${hour}시간 ${minute}분` : `${minute}분`}</p>
                    <p className="font">POINT</p>
                    <p className="number">+{point}</p>
                </div>
                <div className="point-item">
                    <p className="title">일반 쓰레기 {log.regular}개</p>
                    <p className="font">POINT</p>
                    <p className="number">+{log.regular * 5}</p>
                </div>
                <div className="point-item">
                    <p className="title">비닐 {log.plastic_bag}개</p>
                    <p className="font">POINT</p>
                    <p className="number">+{log.plastic_bag * 5}</p>
                </div>
                <div className="point-item">
                    <p className="title">캔 {log.can}개</p>
                    <p className="font">POINT</p>
                    <p className="number">+{log.can * 10}</p>
                </div>
                <div className="point-item">
                    <p className="title">플라스틱 {log.plastic}개</p>
                    <p className="font">POINT</p>
                    <p className="number">+{log.plastic * 10}</p>
                </div>
            </div>
            <button className="w-4/5 green-btn mt-[40px]">
                <Link href="/calendar">
                    확인
                </Link>
            </button>
        </div>
    )
}

export default Result;