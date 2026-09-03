import * as service from '../services/categoriasService.js';

export async function criar(req, res, next) {
    try {
        const id = await service.criar(req.body)
        res.status(201).json ({id, ...req.body})
    } catch (erro) {
        next(erro);
    }
}