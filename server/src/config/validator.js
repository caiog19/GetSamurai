const { body } = require('express-validator');

const validationComment = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('content').exists().withMessage('Comentário não pode ser nulo.').isLength({min : 1}).withMessage('Por favor, preencha esse campo.')
            ]
        }
        case 'update': {
            return [
                body('content').exists().withMessage('Comentário não pode ser nulo.').isLength({min : 1}).withMessage('Por favor, preencha esse campo.')
            ]
        }
    }
}

module.exports = {
    validationComment
}