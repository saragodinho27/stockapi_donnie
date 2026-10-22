import pool from '../config/db.js';

const CAMPOS_ITENSPEDIDOS = ['id', 'pedido_id', 'produto_id', 'quantidade', 'preco_unitario'];

//Função para criar
export async function criar(item) {
    const { pedido_id, produto_id, quantidade, preco_unitario } = item;
    const [r] = await pool.query(
        'INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario)'
        +
        'VALUES(?,?,?,?,?)', [pedido_id, produto_id, quantidade, preco_unitario ?? 0]
    );
    return r.insertId
}

//Função para listar
export async function listarTodos() {
    const [rows] = await pool.query(
        `SELECT itensPedido.id, itensPedido.quantidade, itensPedido.preco_unitario,
        produto.nome AS produtos
        FROM itensPedido
        INNER JOIN produtos
        ON itensPedido.pedido_id = pedido.id`
    );
    return rows;
}

//Função para buscar pelo ID
export async function buscarPorId(id) {
    const [rows] = await pool.query(
        `SELECT itensPedido.id, itensPedido.quantidade, itensPedido.preco_unitario,
        produto.nome AS produtos
        FROM itensPedido
        INNER JOIN produtos
        ON itensPedido.pedido_id = pedido.id
        WHERE pedido.id = ?`, [id]);
    return rows[0];
}

//Função para atualizar
export async function atualizar(id, item) {
    const atualizar = Object.keys(item).filter((campo) => CAMPOS_ITENSPEDIDOS.includes(campo));

    const valores = atualizar.map((campo) => item[campo]);

    const [r] = await pool.query(
        `UPDATE itensPedido SET atualizar = ? WHERE id = ?`, [quantidade, preco_unitario],
        [...valores, id] // O ... espalha o conteúdo do array 
    )

    return r.affectedRows;  
}

//Função para excluir
export async function deletar(id) {
    const [r] = await pool.query(
        'DELETE FROM itensPedido WHERE id=?'
        , [id]);
    return r.affectedRows;
}