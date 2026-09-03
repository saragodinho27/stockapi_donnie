import express from 'express';
import * as controller from '../controllers/categoriasControllers.js';
import { validarCategoria } from '../middlewares/validarCategoria.js';

const router = express.Router();

router.post('/categorias', validarCategoria, controller.criar);

export default router;