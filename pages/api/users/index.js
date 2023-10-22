import User from "../../../models/User";
import db from "../../../util/dbConnect";

const handler = async (req, res) => {
  await db();

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const users = await User.findById(id);
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ message: "oops" });
    }
  }
};

export default handler;
