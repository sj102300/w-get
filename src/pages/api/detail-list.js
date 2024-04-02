
export default async function handler(req, res){


    let data = [
        {
            id: 1,
            leader:'이깨끗',
            imgSrc: '/images/Woman Running.png',
            status: '모집중',
            title: '경복궁 근처 플로깅 모집!!',
            content: '경복궁 근처 쓰레기 줍고 담소 나눠요 ~~',
            location: '경복궁역',
            time: new Date('2023-08-11 10:30:00'),
            num:3,
            maxNum:6
        },
        {
            id: 2,
            leader:'동작구 클리너',
            imgSrc: '/images/Woman Running.png',
            status: '모집중',
            title: '한강에서 플로깅해요',
            content: '한강에서 플로깅도 함께 하고, 뒷풀이로 치맥해요~!',
            location: '여의나루역',
            time: new Date('2023-08-16 15:30:00'),
            num:4,
            maxNum:10
        },
        {
            id: 3,
            leader:'쓰레기 살인마',
            imgSrc: '/images/Party Popper.png',
            status: '모집중',
            title: '콘서트 애프터 모임',
            content: '콘서트 끝나고 ! 다 함께 깔끔한 공연문화 만들어봐요 :)',
            location: '올림픽공원',
            time: new Date('2023-08-20 20:30:00'),
            num:10,
            maxNum:25
        },
        {
            id: 4,
            leader:'이깨끗',
            imgSrc: '/images/Soccer Ball.png',
            status: '모집중',
            title: 'K리그 팬 모임',
            content: '축구 보고 다같이 깔끔하게 정리하는 멋진 팬들을 모집합니다',
            location: '월드컵경기장',
            time: new Date('2023-08-21 19:00:00'),
            num:8,
            maxNum:20
        },
        {
            id: 5,
            leader:'텀블러 수집가',
            imgSrc: '/images/Woman Running.png',
            status: '모집중',
            title: '뚝섬에서 플로깅할 사람!!',
            content: '뚝섬유원지 걷고 같이 플로깅해요!!',
            location: '뚝섬유원지역',
            time: new Date('2023-08-23 18:30:00'),
            num:1,
            maxNum:4
        },
        {
            id: 6,
            leader:'어대지박령',
            imgSrc: '/images/Woman Running.png',
            status: '모집중',
            title: '어린이 대공원 플로깅 모임',
            content: '어린이 대공원에서 플로깅할 사람 모집합니다~!',
            location: '어린이대공원역',
            time: new Date('2023-08-24 10:00:00'),
            num:2,
            maxNum:5
        }
    ]
    
    if(req.method === 'GET'){

        data.map((e)=>{
            return e.time = `${e.time.getMonth()}월 ${e.time.getDate()}일 ${e.time.getHours()}시 ${e.time.getMinutes()}분`;
        })
        
        res.status(200).json(data);
    }
}