'use client'

import { useState } from 'react';
import Headerbar from '../headerbar';
import './login.scss';

function Login(){

    function email_check( email ) {    
        var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (email != '' && email != 'undefined' && regex.test(email)); 
    }

    let [email, setEmail] = useState({email:'', valid:false});
    let [pw, setPw] = useState('');

    return(
        <div className='login'>
            <Headerbar title={''} color={'black'}/>
            <h1>쓰담서울과 함께<br />플로깅을 기록 해 보세요.</h1>
            <input required type='email' placeholder='이메일을 입력하세요.' 
                onChange={(e)=>{
                    email_check(e.target.value) ? setEmail({email:e.target.value, valid:true}) : null;
                }}/>
            <input required type='password' placeholder='비밀번호를 입력하세요.' 
                onChange={(e)=>{
                    setPw(e.target.value);
                }}/>
            <div className="finding">
                <p>아이디 찾기</p><p>ㅣ</p><p>비밀번호 찾기</p>
            </div>
            <button onClick={()=>{
                
            }} className={email.valid && pw !== '' ? 'green-btn w-full': 'darkgray-btn w-full'} >로그인하기</button>
            <button className='white-btn w-full mt-[12px]'><Link href="/signup" >회원가입하기</Link></button>
        </div>
    )
}


export default Login;