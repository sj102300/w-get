'use client';

import "./write.scss";

import Headerbar from "../../headerbar";
import { useEffect, useState } from "react";

function Write(){

    let [title, setTitle] = useState({content : '', valid: false});
    let [location, setLocation] = useState({content: '', valid: false});
    let [num, setNum] = useState({content: '', valid: false});
    let [content, setContent] = useState({content: '', valid: false});

    return(
        <div className="write">
            <Headerbar title={"방 만들기"}/>
            <h1>원하는 정보를 입력해주세요.</h1>
            <h2>방 이름</h2>
            <input className={title.content==='' ? '' : (title.valid ? 'valid': 'invalid')} 
                placeholder="2 ~ 20 자 이내로 작성해주세요." defaultValue={title.content} 
                onChange={(e)=>{
                    setTitle({content: e.target.value, valid: e.target.value.length >= 2 && e.target.value.length <=20 ? true : false})
            }}/>
            <h2>위치</h2>
            <input className={location.content === '' ? '' : (location.valid ? 'valid': 'invalid')} 
                placeholder="2 ~ 20 자 이내로 찾기 쉬운 주소를 작성해주세요." defaultValue={location.content} 
                onChange={(e)=>{
                    setLocation({content: e.target.value, valid: e.target.value.length >= 2 && e.target.value.length <= 20 ? true : false});   
            }}/>
            <h2>인원</h2>
            <input className={num.content === '' ? '' : (num.valid ? 'valid': 'invalid')} 
                type="number" placeholder="3 ~ 300 사이의 숫자만 입력해주세요" defaultValue={num.content} onChange={(e)=>{
                    let tmp = Number(e.target.value);
                    setNum({content: tmp, valid: tmp>=3 && tmp<=300 ? true : false});
            }}/>
            <h2>소개글</h2>
            <textarea className={content.content === '' ? '' : (content.valid ? 'valid': 'invalid')} 
                placeholder="2 ~ 100 자 이내로 작성해주세요." defaultValue={content.content} onChange={(e)=>{
                setContent({content: e.target.value, valid: e.target.value.length >= 2 && e.target.value.length <= 100 ? true : false});   
            }}/>
            <button className={title.valid && location.valid && num.valid && content.valid ? 'w-full green-btn' : 'w-full gray-btn'} >만들기</button>
        </div>
    )
}

export default Write;