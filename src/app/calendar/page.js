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
      
    </div>
  )
}

export default MyCalendar;