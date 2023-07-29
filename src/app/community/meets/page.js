'use client';

import { useEffect, useState } from 'react';
import './meets.scss';


function Meets() {

    let [selected, setSelected] = useState(1);

    // useEffect(()=>{
    //     if(selected === 1){
    //         document.getElementsById('type1').className = "selected"
    //     } else if(selected ===2){
    //         document.getElementById('type2').className = "selected"
    //     } else if(selected ===3){
    //         document.getElementById('type3').className = "selected"
    //     }
    // }, [selected]);

    return (
        <div className='meets'>
            <div className='header'>
                <h2>플로깅 MEETS</h2>
                <button>+ 방만들기</button>
            </div>
            <div className='type-navbar'>
                <button id="type1" onClick={() => { setSelected(1); }} className='selected'>탐색</button>
                <button id="type2" onClick={() => { setSelected(2); }} >참여</button>
                <button id="type2" onClick={() => { setSelected(3); }} >종료</button>
            </div>
            <div className="item-container">
                <OneItem />
                <OneItem />
                <OneItem />
                <OneItem />
                <OneItem />
                <OneItem />
            </div>
        </div>
    )
}


function OneItem() {

    return (
        <div className='item'>
            <div className='left'>
                <div className="circle"></div>
                <p>모집중</p>
            </div>
            <div className='right'>
                <div className='title'>
                    <h4>한강에서 플로깅해요</h4>
                    <h4 className="text-[#45BF86]">4/10</h4>
                </div>
                <p className='w-4/5 text-sm'>한강에서 플로깅도 함께 하고, 뒷풀이로 치맥해요~!</p>
                <div className='w-4/5 info text-[#A1A1A1]'>
                    <span className="mr-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M7.50004 13.1C7.50004 13.1 11.8827 9.20436 11.8827 6.28262C11.8827 3.86217 9.92049 1.90001 7.50004 1.90001C5.07959 1.90001 3.11743 3.86217 3.11743 6.28262C3.11743 9.20436 7.50004 13.1 7.50004 13.1Z" stroke="#A2A2A2" />
                            <path d="M8.90022 6.1001C8.90022 6.8733 8.27342 7.5001 7.50022 7.5001C6.72702 7.5001 6.10022 6.8733 6.10022 6.1001C6.10022 5.3269 6.72702 4.7001 7.50022 4.7001C8.27342 4.7001 8.90022 5.3269 8.90022 6.1001Z" stroke="#A2A2A2" />
                        </svg>
                        <p>여의나루역</p>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M3.70833 5.69998H11.875M4.76389 2.25V3.15011M10.7083 2.25V3.15M10.7083 3.15H4.875C3.9085 3.15 3.125 3.95588 3.125 4.94999V10.95C3.125 11.9441 3.9085 12.75 4.875 12.75H10.7083C11.6748 12.75 12.4583 11.9441 12.4583 10.95L12.4583 4.94999C12.4583 3.95588 11.6748 3.15 10.7083 3.15ZM6.33333 9.29999L7.20833 10.2L9.25 8.1" stroke="#A2A2A2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>8월16일 3:30PM</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Meets;