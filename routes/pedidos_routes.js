const middlewarePedido = require('../middlewares/pedidos_middleware')
const pedidoController = require ('../controllers/pedido_controller')
const middlewareUsuario = require('../middlewares/usuarios_middleware');
const express = require("express");
const api = express.Router();
api.get('/:id', middlewareUsuario.tokenIsAdmin, pedidoController.getPedidoById);
api.get('/', middlewareUsuario.tokenIsAdmin, pedidoController.getAllPedidos);
api.patch('/', middlewareUsuario.tokenIsAdmin, pedidoController.upDateEstado);
api.post('/', middlewareUsuario.tokenOk, middlewarePedido.platosPedidos, pedidoController.postPedido);
api.delete('/', middlewareUsuario.tokenIsAdmin, pedidoController.deletePedidoUsuario);
module.exports = api;