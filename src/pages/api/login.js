import db from "../../utils/database"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default async function login(req, res){
    
    if(req.method === "POST"){
        let body = JSON.parse(req.body);

        const user = await db.users.findUnique({
            where: {
                email: body.email
            }
        })

        if(!user) {
            res.status(400).json({ message: "존재하지 않는 이메일입니다." });
        }
        else{
            let isCorrect = await bcrypt.compare(body.pw, user.pw);
            if(!isCorrect) {
                res.status(400).json( { message: "비밀번호가 틀렸습니다." });
            }
            else {
                //accesstoken, refreshtoken 만들어서 보내야돼
                const accessToken = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
                    expiresIn: "1h"
                });
                const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
                    expiresIn: "7d"
                });
                res.status(302).json({ accessToken, refreshToken });
            }
        }
    }
}