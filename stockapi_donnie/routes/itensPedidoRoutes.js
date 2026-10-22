import express from 'express';
import * as controller from '../controllers/itensPedidoController.js';
import { validarItemPedido } from '../middlewares/validarItemPedido.js';

const router = express.Router();

router.post('/itens_Pedidos', validarItemPedido, controller.criar);
router.get('/itens_Pedidos', controller.listar);
router.get('/itens_Pedidos/:id', controller.buscarPorId);
router.put('/itens_Pedidos/:id', validarItemPedido, controller.atualizar);
router.delete('/itens_Pedidos/:id', controller.deletar);

export default router;