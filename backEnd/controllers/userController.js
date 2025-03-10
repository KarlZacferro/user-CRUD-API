const User = require('../models/User');

// Criar um novo usuário
exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validação de entrada
        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        // Verifica se o email já existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }

        // Cria e salva o novo usuário
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obter todos os usuários
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obter um usuário por ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Atualizar um usuário
exports.updateUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validação de entrada
        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        // Atualiza o usuário
        const user = await User.findByIdAndUpdate(req.params.id, { email, password }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

