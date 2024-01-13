import jwt from "jsonwebtoken";

export const isLogin = (req, res, next) => {
  // const authHeader = req.header["authorization"];
  const token = req.cookies?.accessToken;
  if (token === null || token === undefined) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};
