import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import produtosRoutes from './routes/produtosRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import itensPedidosRoutes from './routes/itensPedidoRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());


app.get('/health', (req, res) => res.json({ status: 'OK' }));


app.use('/api/v1/stockapi', produtosRoutes);
app.use('/api/v1/stockapi', categoriaRoutes);
app.use('/api/v1/stockapi', itensPedidosRoutes);
app.use('/app/v1/stockapi', usuariosRoutes.js); //http://localhost:3000/api/v1/stockapi/usuarios

app.use((req, res) => {
    res.status(404).json({ erro: `Rota ${req.method} ${req.originalUrl} não encontrada` });
});


app.use((erro, req, res, next) => {
    console.error(erro);


    if (erro.code == 'ER_NO_REFERENCE_ROW_2') {
        return res.status(400).json({ erro: 'categoria_id informada não existe' });
    }
    res.status(500).json({ erro: 'Erro interno do servidor' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));