'use client';

import "./write.scss";

import Headerbar from "../../headerbar";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import 'node_modules/react-datepicker/dist/react-datepicker.css';
import { useRouter } from "next/navigation";
import PostModal from "@/app/components/postModal";
import { convertAddressToLatLng } from "@/utils/convertAddressToLatLng";

function Write() {

    let [title, setTitle] = useState({ content: '', valid: false });
    let [num, setNum] = useState({ content: '', valid: false });
    let [address, setAddress] = useState({ address: '', jibun: '', lat: 0, lng: 0, valid: false });
    let [content, setContent] = useState({ content: '', valid: false });

    const [startDate, setStartDate] = useState(new Date());

    let [modal, setModal] = useState(false);

    const handleComplete = async (data) => {
        let latLng = await convertAddressToLatLng(data.address);
        setAddress({
            address: data.address,
            jibun: data.jibunAddress,
            lat: latLng.lat,
            lng: latLng.lng,
            valid: true,
        });
        setModal(false);
    }

    useEffect(()=>{
        let accessToken = sessionStorage.getItem('accessToken');
        if(!accessToken) {
            window.alert('로그인 후 이용바랍니다.');
            router.push('/login')
        }
    },[])

    let router = useRouter();

    return (
        <div>
            <Headerbar title={"그룹 만들기"} color={'#fff'} />
            <div className="write">
                <h1>원하는 정보를 입력해주세요.</h1>
                <h2>방 이름</h2>
                <input className={title.content === '' ? '' : (title.valid ? 'valid' : 'invalid')}
                    placeholder="2 ~ 20 자 이내로 작성해주세요." defaultValue={title.content}
                    onChange={(e) => {
                        setTitle({ content: e.target.value, valid: e.target.value.length >= 2 && e.target.value.length <= 20 ? true : false })
                    }} />
                <h2>위치</h2>
                <input className={address.address === '' ? '' : (address.valid ? 'valid' : 'invalid')} type="text" placeholder='주소 찾기' value={address.address}
                    onClick={(e) => {
                        setModal(true);
                    }} />
                {
                    modal ?
                        <PostModal setModal={setModal} handleComplete={handleComplete} />
                        : null

                }
                <h2>시간</h2>
                <div className="date-picker">
                    <DatePicker
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
                {
                    title.valid && address.valid && num.valid && content.valid ?
                        <button className='w-full green-btn'
                            onClick={() => {
                                let accessToken = sessionStorage.getItem('accessToken');
                                fetch('/api/meets', {
                                    method: "POST",
                                    headers: {
                                        Authorization: `Bearer ${accessToken}`
                                    },
                                    body: JSON.stringify({
                                        title: title.content,
                                        content: content.content,
                                        maxNum: num.content,
                                        address: address.address,
                                        jibun: address.jibun,
                                        lat: address.lat,
                                        lng: address.lng,
                                        daytime: startDate //kst timezone
                                    }),
                                }).then((response) => {
                                    return response.json()
                                }).then((result) => {
                                    router.push(`/meets/${result.newMeet.id}`)
                                })
                            }}
                        >만들기</button>
                        : <button className='w-full gray-btn'>만들기</button>
                }
            </div>
        </div>
    )
}

export default Write;