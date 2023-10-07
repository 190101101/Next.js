import User from '../../../models/User';
import db from '../../../util/dbConnect';
import bcrypt from 'bcryptjs';

const handler = async ( req, res) => {
    await db();

    const body = req.body;
    const user = await User.findOne({email: body.email});

    if(user){
        res.status(400).json({message: 'user already exists!'});
        return;
    }

    try{
        let newUser = await new User(body);
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        newUser.confirmpassword = await bcrypt.hash(newUser.confirmpassword, salt);
        console.log(newUser);
        await newUser.save();
        console.log(newUser);
        res.status(200).json(newUser);

    }catch(err){
        console.log(err);
        res.status(400).json({message:'oops'});
    }
}

export default handler;