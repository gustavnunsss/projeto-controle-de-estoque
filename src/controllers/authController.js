const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registrar usuário (cadastrar)
exports.register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Verifica se o usuário já existe
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rowCount > 0) {
      return res.status(400).json({ message: 'Usuário já cadastrado' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insere novo usuário no banco
    const newUser = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    );

    // Gera token JWT
    const token = jwt.sign(
      { userId: newUser.rows[0].id, email: newUser.rows[0].email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Retorna o novo usuário
    res.status(201).json({
      message: 'Usuário registrado com sucesso!',
      user: newUser.rows[0],
      token,
    });
  } catch (err) { 
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};                                                                                       