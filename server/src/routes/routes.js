// Importação dos controllers existentes 
const { Router } = require('express');
const UserController = require('../controllers/UserController');


// Criando a instância router
const router = Router();

// Rotas para CRUD de User
router.get('/users',UserController.index);
router.get('/user/:id',UserController.show);
router.post('/users',UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);


// Exportação das rotas criadas
module.exports = router;

