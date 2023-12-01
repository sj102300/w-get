import db from '../../utils/database'

export default async function PloggingLog(req, res) {

    //플로깅 로그 등록
    if (req.method === "POST") {

        let body = JSON.parse(req.body);
        let userid = req.headers.userid;

        let data = {
            userid: userid,
            accumulated_time: Number(body.accumulated_time),
            regular: Number(body.regular),
            plastic_bag: Number(body.plastic_bag),
            plastic: Number(body.plastic),
            can: Number(body.can)
        }

        data.point = Number(((data.accumulated_time / 60) + (data.regular + data.plastic_bag) * 5 + (data.can + data.plastic) * 10) / 1);

        let newLog = await db.plogging_log.create({
            data
        })

        let target = await db.user_plogging_info.update({
            where: {
                userid: userid,
            },
            data: {
                accumulated_time: {
                    increment: newLog.accumulated_time
                },
                regular: {
                    increment: newLog.regular
                },
                plastic_bag: {
                    increment: newLog.plastic_bag
                },
                can: {
                    increment: newLog.can
                },
                plastic: {
                    increment: newLog.plastic
                },
                point: {
                    increment: newLog.point
                },
                count: {
                    increment: 1
                }
            },
        })

        res.status(200).json({ newLog });
    }

    //내 한달치 플로깅 로그 가져오기
    if (req.method === 'GET') {
        let userid = req.headers.userid;
        let month = Number(req.query.month);
        let year = Number(req.query.year);

        let currentMonth = new Date(`${year}-${month + 1}-01`);
        let nextMonth = month === 11 ? new Date(`${year + 1}-01-01`) : new Date(`${year}-${month + 2}-01`)


        let ploggingLogs = await db.plogging_log.findMany({
            where: {
                userid: userid,
                day: {
                    gte: currentMonth, //현재 달
                    lt: nextMonth, //다음 달
                }
            }
        });

        res.status(200).json({
            ploggingLogs: ploggingLogs.map((e) => {
                return {
                    ...e,
                    day: e.day.setHours(e.day.getHours() - 9), //db는 한국시간대, 근데 Prisma는 이를 인식 못하고 utc시간 취급함. 그래서 utc시간대로 만들어주기 위해서 9시간 빼주기
                }
            })
        })
    }

    if (req.method === "DELETE") {

    }

}