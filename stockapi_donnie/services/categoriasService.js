import pool from '../config/db.js';

export async function criar(categoria) {
    const {nome} = categoria;
    const [r] = await pool.query(
        'INSERT INTO categorias (nome) VALUE (?)', [nome]
    );
    return r.insertId
}