const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const authRoutes = require('./routes/auth.js');
app.use('/api/auth', authRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log('Server running on port ' + PORT)
);
