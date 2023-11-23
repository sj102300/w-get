'use client';
import { useState, useEffect } from 'react';
import {toast, Slide} from 'react-toastify';

export default function JoinBtn(){

    let joinList=['이깨끗', '동작구 클리너', '텀블러 수집가']

    let [joinStr, setJoinStr] = useState();

    useEffect(()=>{
        let tmp='';
        joinList.forEach((e)=>{
            tmp = tmp + e + '님, '
        });
        setJoinStr(tmp.slice(0, tmp.length-2) + ' ');
    }, [])

    return(
        <button onClick={()=>{
                toast(`${joinStr}과 함께 합니다.`, { hideProgressBar: true, autoClose: 2000, type: 'success', style: {margin:'10px', borderRadius: '5px'}, transition : Slide })
        }} className="lg-green-btn w-full mb-[10px]">참여하기</button>
    )
}