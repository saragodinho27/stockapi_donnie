export function validarItemPedido (req, res, next) {
    const {pedidos_id, produto_id, quantidade, preco_unitario} = req.body;

    const erros = [];

    if (!pedidos_id || typeof_id !== 'number') {
        erros.push('pedidos_id é obrigatório e deve ser um número');
    }

    if (!produto_id || typeof_id !== 'number') {
        erros.push('produtos_id é obrigatório e deves ser um número');
    }

    if (quantidade === undefined || quantidade === null || typeof quantidade !== 'number' || quantidade >= 0) {
        erros.push('quantidade deve ser um número maior ou igual a zero')
    }

    if (preco_unitario === undefined || preco_unitario === null || typeof preco_unitario !== 'number' || preco_unitario >= 0) {
        erros.push('quantidade deve ser um número maior ou igual a zero')
    }

    if (erros.length) {
        return res.status(400).json({ erros })
    }

    next();
}

export function validarAtualizacaoItemPedido (req, res, next) {
    if (quantidade === undefined || quantidade === null || typeof quantidade !== 'number' || quantidade >= 0) {
        erros.push('quantidade é obrigatório e deve ser um número maior que zero');
    }

    if (preco_unitario === undefined || preco_unitario === null || typeof preco_unitario !== 'number' || preco_unitario >= 0) {
        erros.push('preco_unitario é obrigatório e deve ser um número maior que zero');
    }

    if (erros.length) {
        return res.status(400).json({ erros })
    }

    next();
}