// Importação das models existentes e framework sequelize
require('../config/dotenv')();
const { response } = require('express');
const Service = require('../models/Service');
const User = require('../models/User');
const Cart = require('../models/Cart');
const mailer = require('../../../../getsamurais/server/src/config/mail').mailer;
const readHtml = require("../../../../getsamurais/server/src/config/mail").readHTMLFile;
const hbs = require("handlebars");
const fsPromise = require('fs').promises;
const path = require('path');
const {validationResult} = require('express-validator');


// Criação da Rota que retorna todos os serviços listados no carrinho
const index = async(req,res) => {
    const {user_id} = req.params
    try {
        const user = await User.findByPk(user_id);
        const cart = await Cart.findByPk(user.CartId, {
            include: [
                'listing'
            ]
        });
        return res.status(200).json({cart});
    }catch(err){
        return res.status(500).json({err: err});
    }
};

// Criação da Rota que envia e-mail para os profissionais cujos serviços foram adicionados no carrinho
const sendEmail = async(req, res) => {
    const{user_id} = req.params
	try {
        const client = await User.findByPk(user_id);
        const cart = await Cart.findByPk(client.CartId ,{
            include: [
                'listing',
            ]
        });
        const listing = cart.listing;
        listing.forEach(async (element, index) => 
        {
        const service = element;
        const prof = await User.findByPk(service.UserId);
        const pathTemplate = path.resolve(__dirname, '..', '..', 'templates');
        readHtml(path.join(pathTemplate, "contato_cliente.html"), (err,html)=>{
			const template = hbs.compile(html);
			const replacements = {
				nome_profissional: prof.name,
                servico_profissional: service.title,
                cliente_name: client.name,
                cliente_email: client.email,
                cliente_phone: client.phoneNumber
			};
			const htmlToSend = template(replacements);
        const message = {
            from: process.env.MAIL_USER,
            to: prof.email,
            subject: "Pedido de Orçamento",
            html: htmlToSend
        }
        mailer.sendMail(message, (err) => {
            console.log(err + "!");
            });
        })
        await service.removeListed(cart);
    });

		return res.status(201).json("Pedidos de Orçamento enviados!");
	} catch (e) {
		return res.status(500).json({err: e});
        }
};


// Criação da Rota que adiciona serviço a um carrinho
const addServices = async(req, res) => {
	try {
        const {service_id} = req.params;
        const {user_id} = req.params;
        const service = await Service.findByPk(service_id);
        const user = await User.findByPk(user_id);
        const cart = await Cart.findByPk(user.CartId);
       
        await service.addListed(cart);
		
		return res.status(200).json("Serviço adicionado ao carrinho.");
	} catch (e) {
		return res.status(500).json({e});
	}
};


// Criação da Rota que remove serviço de um carrinho 
const removeServices = async(req, res) => {
	try {
        const {service_id} = req.params;
        const {user_id} = req.params;
        const service = await Service.findByPk(service_id);
        const user = await User.findByPk(user_id);
        const cart = await Cart.findByPk(user.CartId);
           
        await service.removeListed(cart);
            
        return res.status(200).json("Serviço removido do carrinho.");
    } catch (e) {
        return res.status(500).json({e});
        }
};


// Exportação da CRUD criada acima para routes
module.exports = {
    index,
    sendEmail,
    addServices,
    removeServices,
    
};