// Importação das models existentes e framework sequelize
const { response } = require('express');
const User = require('../models/User');
const Cliente = require('../models/Cliente');


// Criação da função que retorna todos os clientes do banco de dados
const index = async(req,res) => {
    try {
        const clientes = await Cliente.findAll({
            include: [{
                model: User
            }]
        });
        return res.status(200).json({clientes});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da função que retorna um único cliente específico do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const cliente = await Cliente.findByPk(id, {
            include: [{
                model: User
            }]
        });
        return res.status(200).json({cliente});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da função que cria novos clientes no banco de dados
const create = async(req,res) => {
    try{
          const cliente = await Cliente.create(req.body);
          return res.status(201).json({message: "Cliente cadastrado com sucesso!", cliente: cliente});
      }catch(err){
          res.status(500).json({error: err});
      }
};

// Criação da função que atualiza atributos de um cliente do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Cliente.update(req.body, {where: {id: id}});
        if(updated) {
            const cliente = await Cliente.findByPk(id, {
                include: [{
                    model: User
                }]
            });
            return res.status(200).send(cliente);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Cliente não encontrado");
    }
};

// Criação da função que deleta um cliente específico do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Cliente.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Cliente deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Cliente não encontrado.");
    }
};

// Criação da função que adiciona relacionamento de um Cliente com user
const addRelationUser = async(req,res) => {
    const {id} = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        const user = await User.findByPk(req.body.UserId);
        if(user.is_admin){
            throw new Error();
          }
        const [updated] = await User.update({is_cliente: 1}, {where: {id: req.body.UserId}});
        if(!updated){
          throw new Error();
        }
        await cliente.setUser(user);
        return res.status(200).json(cliente);
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da função que remove relacionamento de um cliente com user
const removeRelationUser = async(req,res) => {
    const {id} = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        const [updated] = await User.update({is_cliente: null}, {where: {id: req.body.UserId}});
        if(!updated){
          throw new Error();
        }
        await cliente.setUser(null);
        return res.status(200).json(cliente);
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