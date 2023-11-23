import "./result.scss";
import Image from "next/image";
import earthImg from '/public/images/EarthImg.png'
import Link from "next/link";

function Result() {

    return (
        <div className="result-page">
            <p className="msg">지구가 더 깨끗해졌어요!</p>
            <Image className="earth-img" src={earthImg} alt="지구 이미지" />
            <div className="point-list">
                <div className="point-item">
                    <p className="title">1H 15M</p>
                    <p className="font">POINT</p>
                    <p className="number">+75</p>
                </div>
                <div className="point-item">
                    <p className="title">일반 쓰레기 5개</p>
                    <p className="font">POINT</p>
                    <p className="number">+25</p>
                </div>
                <div className="point-item">
                    <p className="title">비닐 4개</p>
                    <p className="font">POINT</p>
                    <p className="number">+20</p>
                </div>
                <div className="point-item">
                    <p className="title">캔 3개</p>
                    <p className="font">POINT</p>
                    <p className="number">+30</p>
                </div>
                <div className="point-item">
                    <p className="title">플라스틱 5개</p>
                    <p className="font">POINT</p>
                    <p className="number">+50</p>
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