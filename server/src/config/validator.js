const { body } = require('express-validator');

const validationComment = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('content').exists().withMessage('Comentário não pode ser nulo.').isLength({min : 1, max: 200}).withMessage('Por favor, preencha esse campo.')
            ]
        }
        case 'update': {
            return [
                body('content').exists().withMessage('Comentário não pode ser nulo.').isLength({min : 1, max: 200}).withMessage('Por favor, preencha esse campo.')
            ]
        }
    }
}

const validationUser = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('email').exists().withMessage("Email não pode ser nulo.").isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa ser exemplo@exemplo'),
                body('name').exists().withMessage("Nome não pode ser nulo.").isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo'),
                body('password').exists().withMessage("Senha não pode ser nula.").isLength({min: 1, max: 30}).withMessage('Por favor, preencha o campo'),
                body('phoneNumber').exists().withMessage("Número de telefone não pode ser nulo.").isLength({min: 1, max: 14}).withMessage('Por favor, preencha o campo')
            ]  
        }
        case 'update': {
            return [
                body('email').optional().isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa ser exemplo@exemplo'),
                body('name').optional().isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo'),
                body('password').optional().isLength({min: 1, max: 30}).withMessage('Por favor, preencha o campo'),
                body('phoneNumber').optional().isLength({min: 1, max: 13}).withMessage('Por favor, preencha o campo')
            ]  
        }
    }
}

const validationService = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('title').exists().withMessage("Título não pode ser nulo.").isLength({min: 1, max: 30}).withMessage('Por favor, insira um titulo menor que 30 caracteres'),
                body('description').exists().withMessage("Descrição não pode ser nula.").isLength({min: 1, max: 200}).withMessage('Por favor, preencha o campo'),
                body('address').exists().withMessage("Endereço não pode ser nulo.").isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo')
            ]
        }
        case 'update': {
            return [
                body('title').optional().isLength({min: 1, max: 30}).withMessage('Por favor, insira um titulo menor que 30 caracteres'),
                body('description').optional().isLength({min: 1, max: 200}).withMessage('Por favor, preencha o campo'),
                body('address').optional().isLength({min: 1, max: 50}).withMessage('Por favor, preencha o campo')
            ]
        }
    }
}

const validationRating = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('value').exists().withMessage("Avaliação não pode ser nula.").isInt({min: 0, max: 5}).withMessage('Por favor, insira uma nota inteira entre 0 e 5.'),
                body('content').exists().withMessage("Descrição da avaliação não pode ser nula").isLength({min: 1, max: 200}).withMessage('Por favor, preencha o campo')
            ]
        }
        case 'update': {
            return [
                body('value').optional().isInt({min: 0, max: 5}).withMessage('Por favor, insira uma nota inteira entre 0 e 5.'),
                body('content').optional().isLength({min: 1, max: 200}).withMessage('Por favor, preencha o campo')
            ]
        }
    }
}


module.exports = {
    validationComment,
    validationUser,
    validationService,
    validationRating
}