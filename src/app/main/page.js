'use client';

import { useState, useEffect } from "react";
import "./plogging.scss";
import Link from "next/link";
import KakaoMap from "./kakaomap";


function Plogging() {

    let [trash, setTrash] = useState(false);
    let [nephron, setNephron] = useState(false);
    let [status, setStatus] = useState(false);
    let [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (status){
        intervalId = setInterval(() => setTime(time++), 1000);
    }
    else{
        clearInterval(intervalId);
    }
  }, [status]);

  useEffect(()=>{

    fetch('/api/test').then((result)=>{
        console.log(result);
    })

  },[])


    return (
        <div className="plogging">
            <KakaoMap className="map" nephron={nephron} trash={trash} />
            <button onClick={() => {
                setTrash(!trash);
            }} className={trash ? "green trash" : "trash invalid"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6.17647H20M10 16.7647V10.4118M14 16.7647V10.4118M16 21H8C6.89543 21 6 20.0519 6 18.8824V7.23529C6 6.65052 6.44772 6.17647 7 6.17647H17C17.5523 6.17647 18 6.65052 18 7.23529V18.8824C18 20.0519 17.1046 21 16 21ZM10 6.17647H14C14.5523 6.17647 15 5.70242 15 5.11765V4.05882C15 3.47405 14.5523 3 14 3H10C9.44772 3 9 3.47405 9 4.05882V5.11765C9 5.70242 9.44772 6.17647 10 6.17647Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button onClick={() => {
                setNephron(!nephron);
            }} className={nephron ? "orange nephron" : "nephron invalid"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.60005 16.8H14.4M6.80005 21.6H17.2001C18.3046 21.6 19.2001 20.7046 19.2001 19.6V4.40002C19.2001 3.29545 18.3046 2.40002 17.2 2.40002H6.80005C5.69548 2.40002 4.80005 3.29545 4.80005 4.40002V19.6C4.80005 20.7046 5.69548 21.6 6.80005 21.6ZM14.4 8.40002C14.4 9.72551 13.3255 10.8 12 10.8C10.6746 10.8 9.60005 9.72551 9.60005 8.40002C9.60005 7.07454 10.6746 6.00002 12 6.00002C13.3255 6.00002 14.4 7.07454 14.4 8.40002Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {
                !status ?
                    <Start setStatus={setStatus} /> : <Proceed time={time} setStatus={setStatus}/>
            }
        </div>
    )
}

function Start({ setStatus }) {
    return (
        <button onClick={() => { setStatus(true); }} className="lg-green-btn plogging-btn w-[150px]">
            플로깅 시작하기
        </button>
    )
}

function Proceed({ time, setStatus }) {
    return (
        <div className="proceed-modal">
            <h1>{`${Math.floor(time / 3600)}:${Math.floor((time / 60 % 60))}:${Math.floor((time % 60))}`}</h1>
            <button onClick={()=>{
                setStatus(false);
            }} className="white-btn w-[150px] mt-[15px]">
                <Link href="/main/enter-result">플로깅 종료하기</Link>
            </button>
        </div>
    )
}

export default Plogging;