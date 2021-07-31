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

const validationUser = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('email').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa ser exemplo@exemplo'),
                body('name').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('birthDate').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isDate().withMessage('Like this: YYYY/MM/DD'),
                body('password').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('phoneNumber').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo')
            ]
        }
    }
}


module.exports = {
    validationComment,
    validationUser
}