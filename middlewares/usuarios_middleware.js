const firma =require('../config/data.json').firma;
const jwt = require("jsonwebtoken");
const dataLogin = (req, res, next) => {
    let user = req.body
    if((user.usuario || user.email) && user.password){next();}
    else {res.status(401).send('Datos de logueo incorrecto')};
  };
const userDataOk = async (req, res, next) => {
  let user = req.body;
    if(user.nombre_usuario && user.apellido_usuario && user.email && user.usuario && user.password && user.telefono && user.domicilio) {
      next();}else {res.status(400).send("Los datos no son validos");}
};
const tokenOk = (req,res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const usuario = jwt.verify(token, firma);
    if (usuario) {
        req.usuario = usuario;
        next();
    } else {res.status(401).send('Usuario sin permisos o Token expirado');}
  };

const tokenIsAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const usuario = jwt.verify(token, firma);
  if (usuario.isAdmin.data[0] === 1) {
      req.usuario = usuario;
      next();
  } else {res.status(401).send('Usuario sin permisos o Token expirado');}
}
module.exports = {
    tokenOk,
    tokenIsAdmin,
    dataLogin,
    userDataOk  
};
