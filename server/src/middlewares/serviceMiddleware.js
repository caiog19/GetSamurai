const User = require('../models/User');
const Service = require('../models/Service');
const Auth = require("../config/auth");

const editService = async(req, res, next) =>{
    const {id} = req.params
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await User.findByPk(payload.sub);
        const service = await Service.findByPk(id)
        if (user.id == service.UserId) {
            return next();
        }
        else return res.status(401).json({'error': 'Sem autorização'});
    } catch(err) {
        return res.status(500).json({'error': 'Internal Server Error'});
    };
}

const deleteService = async(req, res, next) =>{
    const {id} = req.params
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await User.findByPk(payload.sub);
        const service = await Service.findByPk(id)
        if (user.isAdmin == 1 || user.id == service.UserId) {
            return next();
        }
        else return res.status(401).json({'error': 'Sem autorização'});
    } catch(err) {
        return res.status(500).json({'error': 'Internal Server Error'});
    };
}


module.exports = {
    editService,
    deleteService

}