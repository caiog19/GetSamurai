// Importação dos controllers existentes 
const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ClienteController = require('../controllers/ClienteController');
const ProfissionalController = require('../controllers/ProfissionalController');


// Criando a instância router
const router = Router();

// Rotas para CRUD de User
router.get('/users',UserController.index);
router.get('/user/:id',UserController.show);
router.post('/users',UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);

// Rotas para CRUD de Cliente
router.get('/clientes',ClienteController.index);
router.get('/cliente/:id',ClienteController.show);
router.post('/clientes',ClienteController.create);
router.put('/cliente/:id', ClienteController.update);
router.delete('/cliente/:id', ClienteController.destroy);

// Rotas para CRUD de Profissional
router.get('/profissionais',ProfissionalController.index);
router.get('/profissional/:id',ProfissionalController.show);
router.post('/profissionais',ProfissionalController.create);
router.put('/profissional/:id', ProfissionalController.update);
router.delete('/profissional/:id',ProfissionalController.destroy);


// Adiciona e remove relacionamento com User e Cliente
router.put('/clienteadduser/:id', ClienteController.addRelationUser);
router.delete('/clienteremoveuser/:id', ClienteController.removeRelationUser);


// Adiciona e remove relacionamento com User e Profissional
router.put('/profissionaladduser/:id', ProfissionalController.addRelationUser);
router.delete('/profissionalremoveuser/:id', ProfissionalController.removeRelationUser);


// Exportação das rotas criadas
module.exports = router;

