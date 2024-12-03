import jwt from "jsonwebtoken";

export default function verifyJsonToken(req, res, next) {
  let rawToken = req.headers.authorization;
  let token = rawToken.split(" ")[1];
  try {
    if (jwt.verify(token, process.env.SECRET_KEY)) {
      next();
    }
  } catch (ex) {
    res.status(401).json({ error: ex });
  }
}
