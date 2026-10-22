import * as service from '../services/usuariosService.js';

// registro
export async function registrar(req, res, next) {
try {
const { email } = req.body;
const existe = await service.buscarPorEmail(email);
if (existe) {
return res.status(400).json({ erro: 'email em uso' });
}
const id = await service.criar(req.body);
res.status(201).json({ id, email });
} catch (erro) { next(erro); }
}

// login
// Buscando o usuário
export async function login(req, res, next) {
    try {
        const { email, senha } = req.body;
        const usuario = await service.buscarPorEmail(email);
        if (!usuario) {
            return res.status(401).json({ erro: 'invalido' });
        }
        
// Verificando a senha
        const ok = await bcrypt.compare(
            senha, usuario.senha_hash
        );
        if (!ok) {
            return res.status(401).json({ erro: 'invalido' });
        }
// bcrypt.compare confere a senha digitada contra o hash salvo — sem nunca descriptografar nada (não é possível descriptografar um hash).

// Gerando o token
        const token = jwt.sign(
            {id: usuarios.id, email: usuario.email},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
// O token não guarda a senha — só dados que identificam o usuário, mais uma validade (1 hora).
        );
        res.json({ token });

    } catch (erro) { next(erro); }
}