// Importação das models existentes e framework sequelize
const { response } = require('express');
const Comment = require('../models/Comment');
const User = require('../models/User');
const Service = require('../models/Service');
const {validationResult} = require('express-validator');
const Auth = require("../config/auth");

// Criação da Rota que retorna todos os commentários do banco de dados
const index = async(req,res) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).json({comments});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna um único comentário específico do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        return res.status(200).json({comment});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da Rota que cria novos comentários no banco de dados
const create = async(req,res) => {
	try {
        const {user_id} = req.params
        const {service_id} = req.params
        const user = await User.findByPk(user_id);
        const service = await Service.findByPk(service_id);
        validationResult(req).throw();
		const newCommentData = req.body
		const comment = await Comment.create(newCommentData);
        await comment.setUser(user)
        await comment.setService(service)
		return res.status(201).json({comment: comment});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

// Criação da Rota que atualiza atributos de um comentário do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        validationResult(req).throw();
        newCommentData = req.body
        const [updated] = await Comment.update(newCommentData, {where: {id: id}});
        if(updated) {
            const comment = await Comment.findByPk(id);
            return res.status(200).send(comment);
        } 
        return res.status(401).json("Comentário não encontrado");
    }catch(e){
        return res.status(500).json({err: e});
    }
};

// Criação da Rota que deleta um comentário específico do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        await comment.setUser(null);
        await comment.setService(null);
        const deleted = await Comment.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Comentário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Comentário não encontrado.");
    }
};


// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    show,
    create,
    update,
    destroy
};