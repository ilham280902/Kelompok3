export const isLogout = (req, res, next) => {
  const token = req.cookies?.accessToken;
  if (token !== null || token !== undefined) return next();
  else res.sendStatus(401);
};
