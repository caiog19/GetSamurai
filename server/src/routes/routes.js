// Importação dos controllers existentes 
const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ServiceController = require('../controllers/ServiceController');
const CommentController = require('../controllers/CommentController');
const validator = require('../config/validator');
const AuthController = require("../controllers/AuthController");
const passport = require("passport");
const serviceMiddleware = require('../middlewares/serviceMiddleware');
const path = require('path');
const multer = require('multer');
const storage = require("../config/files");


// Criando a instância router
const router = Router();

// Criando instância para upload de fotos
const upload = multer({ storage: storage,
	fileFilter: function (req, file, cb) {
	        const ext = path.extname(file.originalname);
	        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
	            return cb(new Error('Extensão de arquivo não suportada!'), false);
	        }
	        cb(null, true);
	    },
	    limits:{
	        fileSize: 2048 * 2048
	    }

 });
 
// Criando instância para upload de múltiplas fotos 
const allUploads = upload.fields([{ name: 'photo', maxCount: 6 }]);

// Rotas de autentiçação e Login
router.use("/auth", passport.authenticate('jwt', {session: false}));
router.get('/auth/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);


// Rotas para CRUD de User
router.get('/user',UserController.index);
router.get('/user/:id',UserController.show);
router.post('/user', validator.validationUser('create'), UserController.create);
router.put('/user/:id', upload.single('photo'), UserController.update);
router.delete('/user/:id', UserController.destroy);

//Rotas para relacionamento entre Users
router.put('/like/:liking_id', UserController.like);
router.put('/unlike/:liking_id', UserController.unlike);
router.get('/listLike/:id',UserController.listLikes);


// Rotas para CRUD de Service
router.get('/service',ServiceController.index);
router.get('/service/:id',ServiceController.show);
router.post('/service/:user_id', validator.validationService('create'), ServiceController.create);
router.put('/service/:id', serviceMiddleware.editDeleteService, ServiceController.update); //passa o Bearer token
router.delete('/service/:id', serviceMiddleware.editDeleteService, ServiceController.destroy); //passa o Bearer token

//Rotas para relacionamento entre Serviço e Fotos
router.post('/service/:id/file', allUploads, ServiceController.addPhotos);
router.delete('/service/photo/:id', ServiceController.removePhoto);


// Rotas para CRUD de Comment
router.get('/comment',CommentController.index);
router.get('/comment/:id',CommentController.show);
router.post('/comment/:user_id/service/:service_id',validator.validationComment('create'), CommentController.create);
router.put('/comment/:id',validator.validationComment('update'), CommentController.update);
router.delete('/comment/:id', CommentController.destroy);


// Exportação das rotas criadas
module.exports = router;

