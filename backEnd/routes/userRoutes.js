const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Rotas CRUD
router.post('/', userController.createUser); // Criar usuário
router.get('/', userController.getAllUsers); // Obter todos os usuários
router.get('/:id', userController.getUserById); // Obter usuário por ID
router.put('/:id', userController.updateUser); // Atualizar usuário
router.delete('/:id', userController.deleteUser); // Excluir usuário

module.exports = router;