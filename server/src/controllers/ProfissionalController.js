// Importação das models existentes e framework sequelize
const { response } = require('express');
const User = require('../models/User');
const Profissional = require('../models/Profissional');


// Criação da função que retorna todos os profissionais do banco de dados
const index = async(req,res) => {
    try {
        const profissionais = await Profissional.findAll({
            include: [{
                model: User
            }]
        });
        return res.status(200).json({profissionais});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da função que retorna um único profissinal específico do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const profissional = await Profissional.findByPk(id, {
            include: [{
                model: User
            }]
        });
        return res.status(200).json({profissional});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da função que cria novos profissionais no banco de dados
const create = async(req,res) => {
    try{
          const profissional = await Profissional.create(req.body);
          return res.status(201).json({message: "Profissional cadastrado com sucesso!", profissional: profissional});
      }catch(err){
          res.status(500).json({error: err});
      }
};

// Criação da função que atualiza atributos de um profissional do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Profissional.update(req.body, {where: {id: id}});
        if(updated) {
            const profissional = await Profissional.findByPk(id, {
                include: [{
                    model: User
                }]
            });
            return res.status(200).send(profissional);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Profissional não encontrado");
    }
};

// Criação da função que deleta um profissional específico do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Profissional.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Profissional deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Profissional não encontrado.");
    }
};

// Criação da função que adiciona relacionamento de um Cliente com user
const addRelationUser = async(req,res) => {
    const {id} = req.params;
    try {
        const profissional = await Profissional.findByPk(id);
        const user = await User.findByPk(req.body.UserId);
        if(user.is_admin){
            throw new Error();
          }
        const [updated] = await User.update({is_cliente: 0}, {where: {id: req.body.UserId}});
        if(!updated){
          throw new Error();
        }
        await profissional.setUser(user);
        return res.status(200).json(profissional);
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da função que remove relacionamento de um cliente com user
const removeRelationUser = async(req,res) => {
    const {id} = req.params;
    try {
        const profissional = await Profissional.findByPk(id);
        const [updated] = await User.update({is_cliente: null}, {where: {id: req.body.UserId}});
        if(!updated){
          throw new Error();
        }
        await profissional.setUser(null);
        return res.status(200).json(profissional);
    }catch(err){
        return res.status(500).json({err});
    }
};



// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addRelationUser,
    removeRelationUser
};