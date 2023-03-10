import jwt from "jsonwebtoken";

export const checkTokenMiddleWare = (req, res, next) => {
  const token = req.body.token;
  // localStorage.getItem("token", token);
  jwt.verify(token, "secret", (err, result) => {
    if (err) {
      res.status(403).send(err);
    }
    return next();
  });
};
