// Importação dos controllers existentes 
const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ServiceController = require('../controllers/ServiceController');
const AuthController = require("../controllers/AuthController");
const passport = require("passport");


// Criando a instância router
const router = Router();

router.use("/auth", passport.authenticate('jwt', {session: false}));

router.get('/auth/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);

// Rotas para CRUD de User
router.get('/users',UserController.index);
router.get('/user/:id',UserController.show);
router.post('/users',UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);

// Rotas para CRUD de Service
router.get('/services',ServiceController.index);
router.get('/service/:id',ServiceController.show);
router.post('/services/:user_id',ServiceController.create);
router.put('/service/:id', ServiceController.update);
router.delete('/service/:id', ServiceController.destroy);


// Exportação das rotas criadas
module.exports = router;

