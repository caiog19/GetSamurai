// Importação dos controllers existentes 
const { Router } = require('express');
const UserController = require('../controllers/UserController');
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


// Exportação das rotas criadas
module.exports = router;

