import User from '../../../models/User';
import db from '../../../util/dbConnect';

const handler = async ( req, res) => {
    await db();

    const {method} = req;

    if(method === 'GET'){
        try{
            const users = await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(400).json({message:'oops'});
        }
    }

    if(method === 'POST'){
        try{
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        }catch(err){
            res.status(400).json({message:'oops'});
        }
    }
}

export default handler;