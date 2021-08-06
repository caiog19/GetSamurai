const User = require('../models/User');
const Comment = require('../models/Comment');
const Auth = require("../config/auth");

const deleteComment = async(req, res, next) =>{
    const {id} = req.params
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await User.findByPk(payload.sub);
        const comment = await Comment.findByPk(id)
        if (user.isAdmin == 1 || user.id == comment.UserId) {
            return next();
        }
        else return res.status(401).json({'error': 'Sem autorização'});
    } catch(err) {
        return res.status(500).json({'error': 'Internal Server Error'});
    };
}


module.exports = {
    deleteComment
}