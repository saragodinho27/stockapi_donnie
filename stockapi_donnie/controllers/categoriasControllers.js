import * as service from '../services/categoriasService.js';

export async function criar(req, res, next) {
    try {
        const id = await service.criar(req.body)
        res.status(201).json ({id, ...req.body})
    } catch (erro) {
        next(erro);
    }
}

export async function listar(req, res, next) {
    try {
        const categoria = await service.listar();
        res.json(categoria);
    } catch (erro) {
        next(erro);
    }
}

export async function buscarPorId(req, res, next) {
    try {
        const {id} = req.params;
        const categoria = await service.buscarPorId(id)
        if (!categoria) {
            return res.status(400).json({erro: 'Categorias não encontrada'});
        }
        res.json(categoria);
    } catch (erro) {
        next(erro);
    }
}

export async function atualizar(req, res, next) {
    try {
        const {id} = req.params;
        const categoriaExistente = await service.buscarPorId(id);
        if (!categoriaExistente) {
            return res.status(404).json({erro: 'Categoria não encontrada'});
        }
        await service.atualizar(id, req.body)
        res.json({id, ...req.body});
    } catch (erro) {
        next(erro);
    }
}

export async function deletar(req, res, next) {
    try {
        const{id} = req.params;
        const n = await service.deletar(id);
        if (linhasRemovidas === 0) {
            return res.status(404).json({erro: 'Categoria não encontrada'});
        }
        res.status(204).send();
    } catch (erro) {
        next(erro);
    }
}