'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast, Slide } from 'react-toastify';

export default function JoinBtn({ id, current_num, max_num }) {

    let router = useRouter();
    let [isJoin, setIsJoin] = useState(false);

    let [joinList, setJoinList] = useState([]);
    let [joinNameList, setJoinNameList] = useState([]);

    let [currentNum, setCurrentNum] = useState(current_num);


    useEffect(() => {
        let accessToken = sessionStorage.getItem('accessToken');
        fetch(`/api/join?id=${id}`, {
            method: 'GET',
            headers: {
                Authorization: accessToken ? `Bearer ${accessToken}` : ''
            }
        }).then((response) => {
            return response.json();
        }).then((result) => {
            setIsJoin(result.isJoin);
            setJoinList(result.joinList);
            setJoinNameList(result.joinNameList);
        })
    }, [currentNum]);


    return (
        <>
        <h4>인원</h4>
        <p>{`${currentNum}/${max_num}`}</p>
            {
                isJoin ?
                    <button className='gray-btn w-full mb-[10px]' onClick={() => {
                        let accessToken = sessionStorage.getItem('accessToken');
                        //참여취소, delete
                        fetch('/api/join', {
                            method: 'PATCH',
                            headers: {
                                Authorization: `Bearer ${accessToken}`
                            },
                            body: JSON.stringify({
                                meetsid: id
                            }),
                        }).then((response) => {
                            return response.json();
                        }).then((result) => {
                            window.alert('취소되었습니다.');
                            setCurrentNum(result.targetMeets.current_num);
                        })
                    }}>취소하기</button>
                    : <button onClick={() => {
                        let accessToken = sessionStorage.getItem('accessToken');
                        if (accessToken === undefined) {
                            window.alert('로그인 후 이용 바랍니다.');
                            router.push('/login');
                        }
                        else {
                            fetch(`/api/join`, {
                                method: 'POST',
                                headers: {
                                    Authorization: `Bearer ${accessToken}`
                                },
                                body: JSON.stringify({
                                    meetsid: id
                                }),
                            }).then((response) => {
                                return response.json()
                            }).then((result) => {
                                setCurrentNum(result.targetMeets.current_num);
                                let joinStr = '';
                                joinNameList.forEach((e) => {
                                    joinStr = joinStr + e + '님, '
                                });
                                joinStr = joinStr.slice(0, joinStr.length - 2) + ' '
                                toast(`${joinStr}과 함께 합니다.`, { hideProgressBar: true, autoClose: 2000, type: 'success', style: { margin: '10px', borderRadius: '5px' }, transition: Slide })
                            })
                        }
                    }} className="lg-green-btn w-full mb-[10px]">참여하기</button>
            }
        </>
    )
}