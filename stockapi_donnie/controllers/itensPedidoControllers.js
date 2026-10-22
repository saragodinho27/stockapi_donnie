import * as service from '../services/itensPedidoService.js';

export async function criar(req, res, next) {
    try {
        const id = await service.criar(req.body)
        res.status(201).json ({id, ...req.body})
    } catch (err) {
        next(err);
    }    
}

export async function listar(req, res, next) {
    try {
        const itens = await service.listarTodos();
        res.json(itens);
    } catch (err) {
        next(err);
    }    
}

export async function buscarPorId(req, res, next) {
    try {
        const {id} = req.params;
        const itens = await service.buscarPorId(id);
        if (!itens) {
            return res.status(404).json({erro: 'Item pedido não encontrado'});
        }
        res.json(itens);
    } catch (err) {
        next(err);
    }
}

export async function atualizar(req, res, next) {
    try {
        const {id} = req.params;
        const itemExistente = await service.buscarPorId(id);
        if (!itemExistente) {
            return res.status(404).json({erro: 'Item de pedido não encontrado'});
        }
        await service.atualizar(id, req.body);
        res.json({id, ...req.body});
    } catch (err) {
        next(err);
    }
}

export async function deletar(req, res, next) {
    try {
        const{id} = req.params;
        const linhasRemovidas = await service.deletar(id);
        if (linhasRemovidas === 0) {
            return res.status(404).json({erro: 'Item de pedido não encontrado'});
        }
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}