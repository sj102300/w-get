import db from '../../utils/database'

export default async function test(req,res){
    const result = await db.users.findMany({});
    console.log(result);
    res.status(200).json(result);
}