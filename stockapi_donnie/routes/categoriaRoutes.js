import express from 'express';
import * as controller from '../controllers/categoriasControllers.js';
import { validarCategoria } from '../middlewares/validarCategoria.js';

const router = express.Router();

router.post('/categorias', validarCategoria, controller.criar);
router.get('/categorias', controller.listar);
router.get('/categorias/:id', controller.buscarPorId);
router.put('/categorias/:id', validarCategoria, controller.atualizar);
router.delete('/categorias/:id', controller.delete);

export default router;