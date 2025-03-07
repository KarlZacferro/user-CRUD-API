const User = require('../models/User');

// Criar um novo usuário
exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validação de entrada
        if (!email || !password) {
            return res.json({ message: 'Email e senha são obrigatórios' });
        }

        // Verifica se o email já existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: 'Email já cadastrado' });
        }

        // Cria e salva o novo usuário
        const newUser = new User({ email, password });
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.json({ message: error.message });
    }
};

