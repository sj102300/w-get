'use client'

import { useState } from 'react';
import Headerbar from '../headerbar';

import './signup.scss'
import { useRouter } from 'next/navigation';



function SignUp() {

    let [email, setEmail] = useState('');
    let [pw, setPw] = useState('');
    let [pwCheck, setPwCheck] = useState('');
    let [nickname, setNickname] = useState('');
    let [address, setAddress] = useState('');

    let router = useRouter();

    return (
        <div className="signup">
            <Headerbar title={'회원가입'} color={'black'} />
            <input type='email' placeholder='이메일'
                onChange={(e) => {
                    setEmail(e.target.value);
                    //이메일인지 체크 해서 유효성 검사
                }} />
            <input type="password" placeholder='비밀번호'
                onChange={(e) => {
                    setPw(e.target.value);
                }} />
            <input type='password' placeholder='비밀번호 확인'
                onChange={(e) => {
                    setPwCheck(e.target.value);
                }} />
            <input type="text" placeholder='닉네임'
                onChange={(e) => {
                    setNickname(e.target.value);
                }} />
            <input type="text" placeholder='주소'
                onChange={(e) => {
                    setAddress(e.target.value);
                }} />

            <button className='green-btn w-full mt-[20px]s'
                onClick={() => {
                    fetch('/api/register', {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            pw: pw,
                            name: nickname,
                            address: address
                        })
                    }).then((res) => {
                        return res.json();
                    }).then((result) => {
                        window.alert("회원가입에 성공했습니다! 로그인 해주세요!");
                        router.push('/login')
                    })
                }}>회원가입 하기</button>
        </div>
    )
}

export default SignUp;


            //  <button className={email.valid && pwCheck.valid && nickname.valid ? 'green-btn w-full mt-[20px]s' : 'darkgray-btn w-full mt-[20px]'}
