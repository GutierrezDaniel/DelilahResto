const middlewarePlatos = require('../middlewares/platos_middleware')
const platosController = require ('../controllers/platos_controller');
const middlewareUsuario = require('../middlewares/usuarios_middleware');
const express = require("express");
const api = express.Router();
api.get('/', middlewareUsuario.tokenOk, platosController.getPlatosDisponibles)
api.get('/favoritos', middlewareUsuario.tokenOk, platosController.platosFavoritos)
api.get('/stock', middlewareUsuario.tokenIsAdmin, platosController.getAllPlatos)
api.patch('/',middlewareUsuario.tokenIsAdmin, middlewarePlatos.platoFromDB, platosController.upDatePlato);
api.post('/',middlewareUsuario.tokenIsAdmin, middlewarePlatos.datosPlato, platosController.postPlato);
api.delete('/', middlewareUsuario.tokenIsAdmin, middlewarePlatos.platoFromDB , platosController.deletePlato);
module.exports = api;