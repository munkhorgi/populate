
export const roleTokenMiddleWare = (req, res, next) => {
  const role = req.body.role;
  // localStorage.getItem("token", token);
    if(role === "admin"){
        console.log(true)
        next()
    }else{
        console.log(false)
        res.states(403).send(error)
    }

//   jwt.verify(role, "secret", (err, result) => {

//     if (err) {
//       res.status(403).send(err);
//     }
//     return next();
//   });
}
