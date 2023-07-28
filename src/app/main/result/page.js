import "./result.scss";
import Image from "next/image";
import earthImg from '/public/images/EarthImg.png'

function Result() {

    return (
        <div className="result-page">
            <p className="msg">지구가 더 깨끗해졌어요!</p>
            <Image className="earth-img" src={earthImg} alt="지구 이미지" />
            <div className="point-list">
                <div className="point-item">
                    <p className="title">2KM</p>
                    <p className="font">POINT</p>
                    <p className="number">+30</p>
                </div>

                <div className="point-item">
                    <p className="title">일반 쓰레기 2개</p>
                    <p className="font">POINT</p>
                    <p className="number">+30</p>
                </div>
                <div className="point-item">
                    <p className="title">2KM</p>
                    <p className="font">POINT</p>
                    <p className="number">+30</p>
                </div>
            </div>
            <button className="w-4/5 green-btn mt-[40px]">
                확인
            </button>
        </div>
    )
}

export default Result;