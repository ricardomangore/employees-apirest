const { Router } = require('express');
const { check } = require('express-validator');
const loginController = require('../controllers/loginController');
const custom_validator = require('../helpers/validator');

const loginRoute = Router();

loginRoute.post('/', [
            check('email', 'El campo Email no debe servacio').notEmpty(),
            check('email', 'El campo no cumple con el formato de Email').isEmail(),
            check('password', 'El campo password no debe ser vacio').notEmpty(),
            check('password','Password incorrecto').isLength({ min: 6 })
        ],
        custom_validator,
        loginController);

module.exports = loginRoute;

