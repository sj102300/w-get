'use client';

import './calendar.scss';


import React, { useState } from 'react'
import Calendar from 'react-calendar';


function MyCalendar() {
  const [value, onChange] = useState(new Date())

  return (
    <div className='my-calendar'>
      <Calendar calendarType='gregory' locale='en' onChange={onChange} value={value} />
      <OneLog />
    </div>
  )
}

function OneLog(){

  return(
    <div className="log">
      <img alt="플로깅 인증 사진" src="https://www.shutterstock.com/image-photo/plogging-concept-detail-girl-hand-picking-1115182178"/>
      <div className='log-text'>
        <h2>2023년 8월 2일</h2>
        <h3>00h 00m 00s</h3>
      </div>
    </div>
  )
}

export default MyCalendar;