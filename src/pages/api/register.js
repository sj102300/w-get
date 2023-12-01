
import db from '../../utils/database';
import bycrpt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();


export default async function register(req, res){

    if(req.method === "POST" ){
        let body = JSON.parse(req.body);

        //이미 있는 이메일인지 찾기
        let isExist = await db.users.findUnique({
            where: {
                email: body.email,
            }
        })

        //이미 존재하는 이메일이면 거부
        if(isExist) res.status(400).json( { message: "중복된 이메일입니다." } );
        else{
            const newUser = await db.users.create({
                data:{
                    name: body.name,
                    email: body.email,
                    address: body.address,
                    pw: await hashPw(body.pw),  //비밀번호 암호화
                    introduction: body.introduction ?? ""
                }
            })
            const newUserPloggingInfo = await db.user_plogging_info.create({
                data: {
                    userid: newUser.id
                }
            })
            res.status(201).json({ newUser });
        }
    }
}

async function hashPw(pw){
    return await bycrpt.hash(pw, Number(process.env.PASSWORD_SALT));
}