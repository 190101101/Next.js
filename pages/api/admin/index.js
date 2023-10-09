import cookie from "cookie";

const handler = (req, res) => {
  const { method } = req;

  if (method === "POST") {
    const { username, password } = req.body;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );

      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "wrong credentials" });
    }
  }
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
}

export default handler;
