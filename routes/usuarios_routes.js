const middlewareUsuario = require('../middlewares/usuarios_middleware');
const usuarioController = require('../controllers/usuario_controller')
const express = require("express");
const api = express.Router();
api.get('/', middlewareUsuario.tokenIsAdmin, usuarioController.getAllUsers);
api.post('/', middlewareUsuario.userDataOk, usuarioController.postUser);
api.post('/login',middlewareUsuario.dataLogin, usuarioController.logIn);
module.exports = api;