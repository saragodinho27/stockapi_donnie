import express from 'express';
import * as controller from '../controllers/usuariosControllers.js';
import { validarUsuarios } from '../middlewares/autenticar.js';

const router = express.Router();

router.post('/usuarios/registro', controller.registrar);
router.post('/usuarios/login', controller.login);
//router.get('/itens_Pedidos/:id', controller.buscarPorId);
//router.put('/itens_Pedidos/:id', validarItemPedido, controller.atualizar);
//router.delete('/itens_Pedidos/:id', controller.deletar);

export default router;