'use client'

import Headerbar from '@/app/headerbar';
import './enter-result.scss';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


function EnterResult() {

    let [trashData, setTrashData] = useState([
        {
            name: '일반쓰레기', num: 0
        }, {
            name: '비닐', num: 0
        }, {
            name: '캔', num: 0
        }, {
            name: '플라스틱', num: 0
        }
    ]);
    let [imgsrc, setImgSrc] = useState('');
    let [filesrc, setFileSrc] = useState('');

    return (
        <div>
            <Headerbar title={'입력'} color={'#fff'} />
            <div className='enter-result'>
                <div className='title'>
                    <p>오늘의 쓰담을 기록해주세요.</p>
                    <Image width={'77'} height={'77'} src='/images/pencil.png' alt="연필사진" />
                </div>
                <div className='trash-container'>
                    {
                        trashData.map((i) => {
                            return (
                                <div key={i} className="item">
                                    <div className='left'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M16.6765 9.89996L7.67651 4.70996" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21.1765 16.5V8.50002C21.1762 8.1493 21.0836 7.80483 20.9081 7.50119C20.7325 7.19754 20.4803 6.94539 20.1765 6.77002L13.1765 2.77002C12.8725 2.59449 12.5276 2.50208 12.1765 2.50208C11.8254 2.50208 11.4806 2.59449 11.1765 2.77002L4.17651 6.77002C3.87278 6.94539 3.62049 7.19754 3.44498 7.50119C3.26946 7.80483 3.17687 8.1493 3.17651 8.50002V16.5C3.17687 16.8508 3.26946 17.1952 3.44498 17.4989C3.62049 17.8025 3.87278 18.0547 4.17651 18.23L11.1765 22.23C11.4806 22.4056 11.8254 22.498 12.1765 22.498C12.5276 22.498 12.8725 22.4056 13.1765 22.23L20.1765 18.23C20.4803 18.0547 20.7325 17.8025 20.9081 17.4989C21.0836 17.1952 21.1762 16.8508 21.1765 16.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.44653 7.45996L12.1765 12.51L20.9065 7.45996" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.1765 22.58V12.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>{i.name}</p>
                                    </div>
                                    <div className='right'>
                                        <svg onClick={() => {
                                            let copy = [...trashData];
                                            copy.num = i.num > 0 ? i.num-- : 0;
                                            setTrashData(copy);
                                        }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M8.80151 12.5H15.5515M21.1765 12.5C21.1765 17.4706 17.1471 21.5 12.1765 21.5C7.20595 21.5 3.17651 17.4706 3.17651 12.5C3.17651 7.52944 7.20595 3.5 12.1765 3.5C17.1471 3.5 21.1765 7.52944 21.1765 12.5Z" stroke="#45BF86" stroke-width="1.35294" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{i.num}</h3>
                                        <svg onClick={() => {
                                            let copy = [...trashData];
                                            copy.num = i.num++;
                                            setTrashData(copy);
                                        }}
                                            xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <g opacity="0.9">
                                                <path d="M21.8235 12.5C21.8235 17.4706 17.794 21.5 12.8235 21.5C7.85292 21.5 3.82349 17.4706 3.82349 12.5C3.82349 7.52944 7.85292 3.5 12.8235 3.5C17.794 3.5 21.8235 7.52944 21.8235 12.5Z" fill="#45BF86" stroke="#45BF86" stroke-width="1.35294" stroke-linecap="round" />
                                                <path d="M16.1986 12.4995H12.8236M12.8236 12.4995H9.44861M12.8236 12.4995V15.8745M12.8236 12.4995L12.8236 9.12451" stroke="white" stroke-width="1.35294" stroke-linecap="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='thick-line'></div>

                    <div className='upload-img'>
                        <h1>인증사진</h1>
                        {
                            imgsrc === '' ?
                                <label for="upload">
                                    <div className="preview"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.0001 4.80005L12 19.2M19.2 12L4.80005 12" stroke="#A2A2A2" stroke-linecap="round" />
                                    </svg>
                                        <input onInput={(e) => {
                                            let tmp = window.URL.createObjectURL(e.target.files[0]);
                                            setImgSrc(tmp);
                                            setFileSrc(e.target.files[0]);
                                            //나중에 URL.revokeObjectURL(imgsrc);  이거해줘야함
                                        }} id="upload" type="file" accept="image/*" />
                                    </div>
                                </label>
                                : <img width="100px" height="100px" src={imgsrc} accept="image/*" />
                        }
                    </div>
                    <div className='btn-container'>
                    <button className='white-btn w-full'><Link href="/main">skip</Link></button>
                    <button className='green-btn w-full'><Link href="/main/result" >등록하기</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterResult;