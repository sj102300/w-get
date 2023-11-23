'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function DetailList() {

    let [list, setList] = useState([])

    useEffect(() => {
        axios.get('/api/detail-list')
            .then((result) => {
                setList(result.data);
            })
            .catch((err)=>{
                console.log(err);
            })

        axios.get('/api/test')
        .then((result)=>{
            console.log(result.data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])


    return (
        <div className="item-container">
            {
                list.map((e) => {
                    return (
                        <Link href={"/community/detail"}>
                            <div className='item'>
                                <div className='left'>
                                    <div className="circle"><Image src={e.imgSrc} alt="icon" width={'24'} height={'24'}/></div>
                                    <p>{e.status}</p>
                                </div>
                                <div className='right'>
                                    <div className='title'>
                                        <h4>{e.title}</h4>
                                        <h4 className="text-[#45BF86]">{`${e.num}/${e.maxNum}`}</h4>
                                    </div>
                                    <p className='w-4/5 text-sm h-2/5'>{e.content}</p>
                                    <div className='w-4/5 info text-[#A1A1A1]'>
                                        <span className="mr-[12px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                <path d="M7.50004 13.1C7.50004 13.1 11.8827 9.20436 11.8827 6.28262C11.8827 3.86217 9.92049 1.90001 7.50004 1.90001C5.07959 1.90001 3.11743 3.86217 3.11743 6.28262C3.11743 9.20436 7.50004 13.1 7.50004 13.1Z" stroke="#A2A2A2" />
                                                <path d="M8.90022 6.1001C8.90022 6.8733 8.27342 7.5001 7.50022 7.5001C6.72702 7.5001 6.10022 6.8733 6.10022 6.1001C6.10022 5.3269 6.72702 4.7001 7.50022 4.7001C8.27342 4.7001 8.90022 5.3269 8.90022 6.1001Z" stroke="#A2A2A2" />
                                            </svg>
                                            <p>{e.location}</p>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                <path d="M3.70833 5.69998H11.875M4.76389 2.25V3.15011M10.7083 2.25V3.15M10.7083 3.15H4.875C3.9085 3.15 3.125 3.95588 3.125 4.94999V10.95C3.125 11.9441 3.9085 12.75 4.875 12.75H10.7083C11.6748 12.75 12.4583 11.9441 12.4583 10.95L12.4583 4.94999C12.4583 3.95588 11.6748 3.15 10.7083 3.15ZM6.33333 9.29999L7.20833 10.2L9.25 8.1" stroke="#A2A2A2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p>{e.time}</p>
                                        </span>
                                    </div>
                                </div>
                            </div></Link>
                    )
                })
            }

        </div>
    )
}

export default DetailList;