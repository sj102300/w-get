import './meets.scss';

import db from '../../utils/database'
import Link from 'next/link';
import Image from 'next/image';
import DetailList from './detailList';


async function Meets() {

    let detailList = await db.meets.findMany({
        select: {
            id: true,
            title: true,
            content:true,
            address:true,
            daytime: true,
            current_num: true,
            max_num: true,
        }
    });


    return (
        <div className='meets'>
            <div className='header'>
                <div>
                    <Image src="/images/logo.png" alt="logo" width={'30'} height={'30'} />
                    <h2>같이하기</h2>
                </div>
                <button><Link href="/meets/write" >+ 그룹 만들기</Link></button>
            </div>
            <DetailList detailList={detailList}/>
        </div>
    )
}




export default Meets;