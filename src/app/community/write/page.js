'use client';

import "./write.scss";

import Headerbar from "../../headerbar";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'node_modules/react-datepicker/dist/react-datepicker.css';


function Write() {

    let [title, setTitle] = useState({ content: '', valid: false });
    let [location, setLocation] = useState({ content: '', valid: false });
    let [num, setNum] = useState({ content: '', valid: false });
    let [content, setContent] = useState({ content: '', valid: false });

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <Headerbar title={"방 만들기"} color={'#fff'} />
            <div className="write">
                <h1>원하는 정보를 입력해주세요.</h1>
                <h2>방 이름</h2>
                <input className={title.content === '' ? '' : (title.valid ? 'valid' : 'invalid')}
                    placeholder="2 ~ 20 자 이내로 작성해주세요." defaultValue={title.content}
                    onChange={(e) => {
                        setTitle({ content: e.target.value, valid: e.target.value.length >= 2 && e.target.value.length <= 20 ? true : false })
                    }} />
                <h2>위치</h2>
                <input className={location.content === '' ? '' : (location.valid ? 'valid' : 'invalid')}
                    placeholder="2 ~ 20 자 이내로 찾기 쉬운 주소를 작성해주세요." defaultValue={location.content}
                    onChange={(e) => {
                        setLocation({ content: e.target.value, valid: e.target.value.length >= 2 && e.target.value.length <= 20 ? true : false });
                    }} />
                <h2>시간</h2>
                <div className="date-picker"><DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    timeInputLabel="Time:"
                    dateFormat="yyyy/MM/dd h:mm aa"
                    showTimeInput
                /></div>
                <h2>인원</h2>
                <input className={num.content === '' ? '' : (num.valid ? 'valid' : 'invalid')}
                    type="number" placeholder="3 ~ 300 사이의 숫자만 입력해주세요" defaultValue={num.content} onChange={(e) => {
                        let tmp = Number(e.target.value);
                        setNum({ content: tmp, valid: tmp >= 3 && tmp <= 300 ? true : false });
                    }} />
                <h2>소개글</h2>
                <textarea className={content.content === '' ? '' : (content.valid ? 'valid' : 'invalid')}
                    placeholder="2 ~ 100 자 이내로 작성해주세요." defaultValue={content.content} onChange={(e) => {
                        setContent({ content: e.target.value, valid: e.target.value.length >= 2 && e.target.value.length <= 100 ? true : false });
                    }} />
                <button className={title.valid && location.valid && num.valid && content.valid ? 'w-full green-btn' : 'w-full gray-btn'} >만들기</button>
            </div>
        </div>
    )
}

export default Write;