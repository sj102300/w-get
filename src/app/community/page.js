import './meets.scss';

import Link from 'next/link';
import Image from 'next/image';
import DetailList from './detailList';


function Meets() {

    return (
        <div className='meets'>
            <div className='header'>
                <div>
                <Image src="/images/logo.png" alt="logo" width={'30'} height={'30'} />
                <h2>같이하기</h2>
                </div>
                <button><Link href="/community/write" >+ 그룹 만들기</Link></button>
            </div>
            <div className='type-navbar'>
                <button id="type1" >탐색</button>
                <button id="type2" >참여</button>
                <button id="type2" >종료</button>
            </div>
            <DetailList />
        </div>
    )
}




export default Meets;