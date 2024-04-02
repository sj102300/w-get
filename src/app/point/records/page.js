'use client'
import Headerbar from '@/app/headerbar';
import './records.scss';

import Image from 'next/image';
import { useEffect, useState } from 'react';


function Records(){

    let [records, setRecords] = useState([]);
    let [user, setUser] = useState([]);
    let [todayPoint, setTodayPoint] = useState(0);

    useEffect(()=>{
        let accessToken = sessionStorage.getItem('accessToken');

        fetch('/api/mypage', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        }).then((response)=> response.json())
        .then((result)=>{
            setUser({
                name: result.user.name,
                point: Number(result.userPloggingInfo.point),
            });
        })
        
        fetch(`/api/point-logs`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        }).then(response => response.json())
        .then((result)=>{
            setRecords(result.pointLogs);
            let today = new Date();
            let todayLogs = result.pointLogs.filter((e)=>{
                let date = new Date(e.day);
                return (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate())
            })
            let tmp = todayLogs.reduce((acc, cur)=>{
                return acc + (Number(cur.point_info) > 0 ? Number(cur.point_info) : 0)
            }, 0)
            setTodayPoint(tmp);
        })

    }, [])

    return(
        <div className='w-full h-full'>
        <Headerbar title={'포인트 내역'} color={'#fff'}/>
        <div className='records'>
            <div className="my-point">
                <p>내 포인트</p>
                <h2>{user.point} POINT</h2>
            </div>
            <div className="today-point">
                <Image width={42} height={42} alt='엄지척' src="/images/good.png" />
                <div>
                    <p>{user.name}님,</p>
                    <h3>오늘은 {todayPoint} 포인트를 받았어요.</h3>
                </div>
            </div>
            <div className='thick-line'></div>
            <div className="items-container">
                {
                    records.map(e => <OneItem data={e}/>)
                }
            </div>
        </div>
        </div>
    )
}

function OneItem({ data }){

    let date = new Date(data.day);

    return(
        <div className='item'>
                    <p>{`${date.getMonth()+1}.${date.getDate()}`}</p>
                    <div className="point-text">
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                    </div>
                    <h3 className={data.point_info > 0 ? 'green' : 'orange'}>{data.point_info}</h3>
                </div>
    )
}


export default Records;