// Importação das models existentes e framework sequelize
require('../config/dotenv')();
const { response } = require('express');
const Service = require('../models/Service');
const User = require('../models/User');
const Photo = require('../models/Photo');
const Cart = require('../models/Cart');
const fsPromise = require('fs').promises;
const path = require('path');
const {validationResult} = require('express-validator');

// Criação da Rota que retorna todos os serviços do banco de dados
const index = async(req,res) => {
    try {
        const services = await Service.findAll();
        return res.status(200).json({services});
    }catch(err){
        return res.status(500).json({err});
    }
};

// Criação da Rota que retorna um único serviço específico do banco de dados
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const service = await Service.findByPk(id);
        return res.status(200).json({service});
    }catch(err){
        return res.status(500).json({err});
    }
};


// Criação da Rota que cria novos serviços no banco de dados
const create = async(req,res) => {
    const {user_id} = req.params;
	try {
        validationResult(req).throw(); //validação
        const user = await User.findByPk(user_id);
        if (user.isCliente == 0) {
            const service = await Service.create(req.body);
            await service.setUser(user);
		    return res.status(201).json({service: service});
        }
		throw new Error();
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

// Criação da Rota que atualiza atributos de um serviço do banco de dados
const update = async(req,res) => {
    const {id} = req.params;
    
    try {
        validationResult(req).throw(); //validação
        const [updated] = await Service.update(req.body, {where: {id: id}});
        if(updated) {
            const service = await Service.findByPk(id);
            return res.status(200).send(service);
        } 
        throw new Error("Serviço não encontrado.");
    }catch(err){
        return res.status(500).json({err: err});
    }
};

// Criação da Rota que deleta um serviço específico do banco de dados
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const service = await Service.findByPk(id);
        await service.setUser(null);
        const deleted = await Service.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Serviço deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Serviço não encontrado.");
    }
};

// Criação da Rota que adiciona fotos a um serviço específico do banco de dados
const addPhotos = async(req, res) => {
	try {
		const {id} = req.params;
        const service = await Service.findByPk(id, {include:{model: Photo}});
		if(req.files){
			req.files.photo.forEach(async (photoFromReq) => {
				const path = process.env.APP_URL + "/uploads/" + photoFromReq.filename;
				const photo = await Photo.create({
					path: path,
				});
				await service.addPhoto(photo);
			});
            await service.reload();
		}
        const serviceUpdated = await Service.findByPk(id, {include:{model: Photo}});
		return res.status(200).json(serviceUpdated);
	} catch (e) {
		return res.status(500).json({e});
	}
};

// Criação da Rota que remove fotos de um serviço específico do banco de dados
const removePhoto = async(req, res) => {
	try {
        const {id} = req.params;
		const photo  = await Photo.findByPk(id);
		const pathDb = photo.path.split("/").slice(-1)[0];
		await fsPromise.unlink(path.join(__dirname, "..", "..", "uploads", pathDb));
		await photo.destroy();
		return res.status(200).json("Foto deletada com sucesso");
	} catch (e) {
		return res.status(500).json(e + "!");
	}
};




// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addPhotos,
    removePhoto
};