const mongoose = require('mongoose');

// Definição do Schema do Usuário
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }, // Email é obrigatório e único
    password: { type: String, required: true } // Senha é obrigatória
});

// Exportar o Model
module.exports = mongoose.model('User', userSchema);