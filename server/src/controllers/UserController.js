// Importação das models existentes e framework sequelize
require("../config/dotenv")();
const { response } = require('express');
const User = require('../models/User');
const Cart = require('../models/Cart');
const mailer = require('../../../../getsamurais/server/src/config/mail').mailer;
const readHtml = require("../../../../getsamurais/server/src/config/mail").readHTMLFile;
const path = require('path');
const hbs = require("handlebars");
const Auth = require("../config/auth");
const {validationResult} = require('express-validator');

// Criação da Rota que retorna todos os usuários do banco de dados
const index = async(req,res) => {
    try {
        const users = await User.findAll({
            include: [
                'liking',
                'liked_by'
            ]
        });
        return res.status(200).json({users});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna um único usuário específico do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id, {
                include: [
                    'liking',
                    'liked_by'
                ]
            });
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da Rota que cria novos usuários no banco de dados
const create = async(req,res) => {
	try {
        validationResult(req).throw(); //validação
		const { password } = req.body;
		const hashAndSalt = Auth.generatePassword(password);
		const salt = hashAndSalt.salt;
		const hash = hashAndSalt.hash;
		const newUserData = {
			email: req.body.email,
			name: req.body.name,
			birthDate: req.body.birthDate,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            isAdmin: req.body.isAdmin,
            isCliente: req.body.isCliente,
            photo: req.body.photo,
            score: req.body.score,
			hash: hash,
			salt: salt
		}
		const user = await User.create(newUserData);

        if(user.isAdmin == 0){
            const cart = await Cart.create();
            await cart.setUser(user);
        }
    
        const pathTemplate = path.resolve(__dirname, '..', '..', 'templates');
        readHtml(path.join(pathTemplate, "confirma_cadastro.html"), (err,html)=>{
			const template = hbs.compile(html);
			const replacements = {
				name: user.name
			};
			const htmlToSend = template(replacements);
        const message = {
            from: process.env.MAIL_USER,
            to: user.email,
            subject: "Confirmação de Cadastro",
            html: htmlToSend
        }
        mailer.sendMail(message, (err) => {
            console.log(err + "!");
            });
        });
		return res.status(201).json({user: user});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

// Criação da Rota que atualiza atributos de um usuário do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        if(req.file){
            console.log(req.file)
            req.body.photo = process.env.APP_URL + "/uploads/" + req.file.filename
        }
        else{
            req.body.photo = null
        }
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);

            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

// Criação da Rota que deleta um usuário específico do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        await Cart.destroy({where: {id: user.CartId}});
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};

// Criação da Rota que cria uma relação de favoritar entre dois usuários do banco de dados 
const like = async(req,res) => {
    const {liking_id} = req.params;
    try {
        const user_liking = await User.findByPk(liking_id);
        const user_liked  = await User.findByPk(req.body.liked_id);
        if (user_liked.isCliente == 0){
            await user_liking.addLiking(user_liked);
            return res.status(200).json("Usuário " + user_liked.id + " foi favoritado."); 
        }
        return res.status(500).json("Cliente não pode ser favoritado.");
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};


// Criação da Rota que remove uma relação de favoritar pré-existente entre dois usuários do banco de dados 
const unlike = async(req,res) => {
    const {liking_id} = req.params;
    try {
        const user_liking = await User.findByPk(liking_id);
        const user_liked  = await User.findByPk(req.body.liked_id);
        if(await user_liked.hasLiked_by(user_liking)){
            await user_liking.removeLiking(user_liked);
            return res.status(200).json("Usuário " + user_liked.id + " foi desfavoritado.");
        }
        return res.status(401).json("Usuário não estava favoritado.");
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

// Criação da Rota que mostra uma lista de quais usuários um usuário específico do banco de dados favoritou
const listLikes = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        const list_likes = await user.getLiking();
        return res.status(200).json({list_likes});
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};


// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    like,
    unlike,
    listLikes
};