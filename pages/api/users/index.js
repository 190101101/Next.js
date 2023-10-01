import db from '../../../util/dbConnect';

const handler = async ( req, res) => {
    await db();
    res.status(200).json({message:'hello'});
}

export default handler;