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
                body('email').exists().withMessage("Email não pode ser nulo.").isLength({min: 1}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa ser exemplo@exemplo'),
                body('name').exists().withMessage("Nome não pode ser nulo.").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('birthDate').exists().withMessage("Data de nascimento não pode ser nula.").isLength({min: 1}).withMessage('Por favor, preencha o campo').isDate().withMessage('Like this: YYYY/MM/DD'),
                body('password').exists().withMessage("Senha não pode ser nula.").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('phoneNumber').exists().withMessage("Número de telefone não pode ser nulo.").isLength({min: 1}).withMessage('Por favor, preencha o campo')
            ]
        }
    }
}

const validationService = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('title').exists().withMessage("Título não pode ser nulo.").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('description').exists().withMessage("Descrição não pode ser nula.").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('address').exists().withMessage("Endereço não pode ser nulo.").isLength({min: 1}).withMessage('Por favor, preencha o campo')
            ]
        }
    }
}


module.exports = {
    validationComment,
    validationUser,
    validationService
}