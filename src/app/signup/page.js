'use client'

import { useState } from 'react';
import Headerbar from '../headerbar';

import './signup.scss'



function SignUp(){

    let [email, setEmail] = useState({content:'', valid:false});
    let [pw, setPw] = useState({content:'', valid:false});
    let [pwCheck, setPwCheck] = useState({content:'', valid:false});
    let [nickname, setNickname] = useState({content:'', valid:false})
    return(
        <div className="signup">
            <Headerbar title={'회원가입'} color={'black'}/>
            <input type='email' placeholder='이메일' />
            <input type="password" placeholder='비밀번호' />
            <input type='password' placeholder='비밀번호 확인' />
            <input placeholder='닉네임' />
            <button className={email.valid && pwCheck.valid && nickname.valid ? 'green-btn w-full mt-[20px]s' : 'darkgray-btn w-full mt-[20px]'}>회원가입 하기</button>
        </div>
    )
}

export default SignUp;