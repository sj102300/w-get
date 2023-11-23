'use client';

import './calendar.scss';


import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Image from 'next/image';


function MyCalendar() {
  const [value, onChange] = useState(new Date())

  return (
    <div className='my-calendar'>
      <Calendar calendarType='gregory' locale='en' onChange={onChange} value={value} />
      <OneLog imgSrc={"/images/result-default.png"} date={'2023년 8월 1일'} time={'1h 15m 23s'}/>
      <OneLog imgSrc={"/images/record-example.jpg"} date={'2023년 8월 1일'} time={'3h 7m 18s'}/>
    </div>
  )
}

function OneLog({imgSrc, date, time}){

  return(
    <div className="log">
      <Image alt="플로깅 인증 사진" src={imgSrc} width={'80'} height={'80'}/>
      <div className='log-text'>
        <h2>{date}</h2>
        <h3>{time}</h3>
      </div>
    </div>
  )
}

export default MyCalendar;