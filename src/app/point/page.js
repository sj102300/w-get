'use client';

import Headerbar from '../headerbar';
import './store.scss';
import Link from 'next/link';
import Image from 'next/image';
import CouponItem from './couponItem';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


function Store() {
    let router = useRouter();

    let [user, setUser] = useState({
        name: '닉네임',
        point: 0,
        address: ''
    });
    
    let [address, setAddress] = useState('');
    let [couponData, setCouponData] = useState([]);

    useEffect(()=>{
        let accessToken = sessionStorage.getItem('accessToken');
        if(!accessToken) {
            window.alert('로그인 후 이용바랍니다.');
            router.push('/login');
        }
        fetch('/api/mypage', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        }).then((response)=>{
            return response.json();
        }).then((result)=>{
            let tmp = result.user.address.split(' ');
            setAddress(result.user.address);
            tmp.shift();
            let address = '';
            tmp.forEach(element => {
                address = address + element + ' '
            });
            setUser({
                name: result.user.name,
                point: Number(result.userPloggingInfo.point),
                address: address
            });
        })
    },[])


    useEffect(()=>{
        fetch(`/api/coupons?address=${address}`, {
            method: 'GET'
        }).then((response)=> response.json())
        .then((result)=>{
            setCouponData(result.coupons)
        })
    },[address])

   

    return (
        <div>
            <Headerbar title={'포인트 스토어'} color={'#fff'} />
            <div className='store'>
                <Link href="/point/records">
                    <div className='my-point'>
                        <div>
                            <p>{user.name}님의 포인트</p>
                            <h2>{user.point} POINT</h2>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 7L15 12L10 17" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Link>
                <Link href="/point/mycoupons">
                    <div className='my-coupon'>
                        <p>내 쿠폰 보기</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 7L15 12L10 17" stroke="#A2A2A2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Link>
                <div className='thick-line'></div>
                <div className='container'>
                    <div className='title'>
                        <div>
                            <h1>{user.name}님,</h1>
                            <h2>{user.address}쿠폰으로 교환해보세요!</h2>
                        </div>
                        <Image width={'86'} height={'86'} alt="동전 이미지" src='/images/coins.png' />
                    </div>
                    <div className='content'>
                        {
                            couponData.map((i)=>{
                                return(<CouponItem point={user.point} data={i}/>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Store;