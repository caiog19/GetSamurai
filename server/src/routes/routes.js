// Importação dos controllers existentes 
const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ServiceController = require('../controllers/ServiceController');
const CommentController = require('../controllers/CommentController');
const validator = require('../config/validator');
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
router.post('/users', validator.validationUser('create'), UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);

//Rotas para relacionamento entre Users
router.put('/like/:liking_id', UserController.like);
router.put('/unlike/:liking_id', UserController.unlike);
router.get('/listLikes/:id',UserController.list_likes);

// Rotas para CRUD de Service
router.get('/services',ServiceController.index);
router.get('/service/:id',ServiceController.show);
router.post('/services/:user_id', validator.validationService('create'), ServiceController.create);
router.put('/service/:id', ServiceController.update);
router.delete('/service/:id', ServiceController.destroy);

// Rotas para CRUD de Comment
router.get('/comments',CommentController.index);
router.get('/comment/:id',CommentController.show);
router.post('/comments/:user_id/:service_id',validator.validationComment('create'), CommentController.create);
router.put('/comment/:id',validator.validationComment('update'), CommentController.update);
router.delete('/comment/:id', CommentController.destroy);


// Exportação das rotas criadas
module.exports = router;

