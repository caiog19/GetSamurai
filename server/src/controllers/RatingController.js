// Importação das models existentes e framework sequelize
const { response } = require('express');
const Rating = require('../models/Rating');
const User = require('../models/User');
const Service = require('../models/Service');
const {validationResult} = require('express-validator');
const Auth = require("../config/auth");

// Criação da Rota que retorna todos as avaliações do banco de dados
const index = async(req,res) => {
    try {
        const ratings = await Rating.findAll();
        return res.status(200).json({ratings});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna uma única avaliação específica do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const rating = await Rating.findByPk(id);
        return res.status(200).json({rating});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da Rota que cria novas avaliações no banco de dados
const create = async(req,res) => {
	try {
        validationResult(req).throw();
        const {service_id} = req.params;
        const {user_id} = req.params;

        const user = await User.findByPk(user_id);
        const service = await Service.findByPk(service_id);
        const profissional = await User.findByPk(service.UserId);
		const newRatingData = req.body;
		const rating = await Rating.create(newRatingData);

        const atual_score = profissional.score;
        const count = await Rating.count({where: {UserId: profissional.id}});
        const atual = parseFloat(atual_score*count);
        const novo = parseFloat(rating.value);
        const count_novo = parseInt(count + 1);
        const new_score = (atual + novo)/count_novo; 

        const [updated] = await User.update({score: new_score}, {where: {id: profissional.id}})

        if(!updated) {
            throw new Error("Erro ao atualizar score.");
        }

        await rating.setUser(user);
        await rating.setService(service);
    
		return res.status(201).json({Rating: rating});
	} catch (e) {
		return res.status(500).json({err: e});
	}
};

// Criação da Rota que atualiza atributos de uma avaliação do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        validationResult(req).throw();
        newRatingData = req.body;
        const [updated] = await Rating.update(newRatingData, {where: {id: id}});
        if(updated) {
            const rating = await Rating.findByPk(id);
            return res.status(200).send(rating);
        } 
        return res.status(401).json("Comentário não encontrado");
    }catch(e){
        return res.status(500).json({err: e});
    }
};

// Criação da Rota que deleta uma avaliação específica do banco de dados
const destroy = async(req,res) => {
    try {
        const {id} = req.params;
        const {service_id} = req.params;
        const service = await Service.findByPk(service_id);
        const user = await User.findByPk(service.UserId);
        const rating = await Rating.findByPk(id);

        const atual_score = user.score;
        const count = await Rating.count({where: {UserId: user.id}});
        const atual = parseFloat(atual_score*count);
        const novo = parseFloat(rating.value);
        const count_novo = parseInt(count - 1);
        const new_score = (atual - novo)/count_novo; 
    
        const [updated] = await User.update({score: new_score}, {where: {id: user.id}})
    
        if(!updated) {
            throw new Error("Erro ao atualizar score.");
        }

        await rating.setUser(null);
        await rating.setService(null);

        const deleted = await Rating.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Avaliação deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Avaliação não encontrada.");
    }
};

const listPerUser = async(req,res) => {
    try {
        const{user_id} = req.params;
        const services = await Service.findAll({where: {UserId: user_id},
            include: [{
                model: Rating, include: [{model: User}]
            }]
        });

        return res.status(200).send(services);

    } catch(err) {
        return res.status(500).json("Erro ao listar as avaliações do Profissional.");
    }
};


// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    listPerUser
};