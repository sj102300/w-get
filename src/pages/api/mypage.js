export default function handler(req, res) {

    let user = {
        address: '서울특별시 동작구',
        email: 'sj102300@naver.com',
        id: 'cleanlee',
        pw: 'cleanlee',
        intro: '안녕하세요~~ 이깨끗입니다~~~ 보라매역 근처에서 자주 나타납니다!!!',
        name: '이깨끗',
        point: 2000,
        role: 'normal'
    }

    let record = {
        seconds: 20072,
        time: 6,
        category: [{
            name: '일반쓰레기', num:23
        }, {
            name: '캔', num: 37
        }, {
            name: '플라스틱', num: 94
        }, {
            name: '비닐', num: 46
        }
        ]
    }


    if (req.method === 'GET') {
        let data = {
            user : {
                name: user.name,
                intro: user.intro,
                point: user.point
    
            },
            record: {
                seconds: record.seconds,
                time: record.time,
                category: record.category
            }
        }
        
        res.status(200).json(data)
    
    }

}