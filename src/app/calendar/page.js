'use client';

import './calendar.scss';

import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import Image from 'next/image';


function MyCalendar() {

  let [value, onChange] = useState(new Date())
  let accessToken;

  let [logs, setLogs] = useState([]);
  let [todayLogs, setTodayLogs] = useState([]);

  let [currentMonth, setCurrentMonth] = useState(0);
  let [currentYear, setCurrentYear] = useState(0);

  //한달 플로깅 기록 불러오기
  useEffect(() => {
    accessToken = sessionStorage.getItem('accessToken');
    fetch(`/api/plogging-log?month=${value.getMonth()}&year=${value.getFullYear()}`, {
      method: "GET",
    }).then((response) => {
      return response.json();
    }).then((result) => {
      let tmp = result.ploggingLogs.map((e) => {
        return { ...e, day: new Date(e.day) }
      })
      setLogs(tmp);
    })
  }, [currentMonth, currentYear])

  //선택된 날짜 플로깅 기록 state설정
  useEffect(() => {
    setCurrentMonth(value.getMonth());
    setCurrentYear(value.getFullYear());
    let tmp = logs.filter(e => e.day.getFullYear() === value.getFullYear() && e.day.getMonth() === value.getMonth() && e.day.getDate() === value.getDate())
    setTodayLogs(tmp);
  }, [logs, value])
  
  return (
    <div className='my-calendar'>
      <Calendar calendarType='gregory' locale='en' onChange={onChange} value={value} />
      {
        todayLogs.map((e, i) => {

          let hour = Math.floor(Number(e.accumulated_time / 60 / 60));
          let minute = Math.floor(Number(e.accumulated_time / 60 % 60));

          return (
            <OneLog key={i} imgSrc={"/images/result-default.png"}
              date={`${e.day.getFullYear()}년 ${e.day.getMonth() + 1}월 ${e.day.getDate()}일`}
              time={hour > 0 ? `${hour}시간 ${minute}분` : `${minute}분`}
            />
          )
        })
      }
    </div>
  )
}

function OneLog({ imgSrc, date, time }) {

  return (
    <div className="log">
      <Image alt="플로깅 인증 사진" src={imgSrc} width={'80'} height={'80'} />
      <div className='log-text'>
        <h2>{date}</h2>
        <h3>{time}</h3>
      </div>
    </div>
  )
}

export default MyCalendar;