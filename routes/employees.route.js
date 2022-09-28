
const { Router } = require('express');
const Employee = require('../db/employeeModel');
const { check } = require('express-validator');
const employeeController = require('../controllers/employeeController');
const employeeValidator = require('../validators/employeeValidator');
const custom_validator = require('../helpers/validator');
const jwt_validator = require('../helpers/jwt_validator');



const employeeRoute = Router();

/**
 * Retorna todos los empleados
 */
employeeRoute.get('/:nss',
    jwt_validator,
    async (req, res) =>{
        console.log(`El usuario ${req.mail} esta logueado`);
        console.log('Desde el GET');
        const employees = await Employee.findOne({ nss: req.params.nss});
        console.log(employees);
        res.json({
            employees
        });
});

/**
 * Registra un nuevo empleado en la BD
 */
employeeRoute.post('/', 
    jwt_validator,
    check('salary', 'No debe ser vacio').notEmpty(),
    check('nss').custom(employeeValidator),
    custom_validator,
    employeeController);

/**
 * Modifica el resgistro de un empleado
 */
employeeRoute.put('/', [(req, res, next) =>{
    console.log('primera revisión');
    next();
}, (req, res, next) => {
    console.log('segunda revisión');
    next();
},(req, res) => {
    console.log('terminan revisión y envia');
    res.send('TODO REVISADO');
}]);

/**
 * ELimina el registro de un empleado de la BD
 */
employeeRoute.delete('/', (req, res) =>{
    res.send('desde DELETE ');
});


module.exports = employeeRoute;