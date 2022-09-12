const { Router } = require('express');
const Employee = require('../db/employeeModel');


const employeeRoute = Router();

/**
 * Retorna todos los empleados
 */
employeeRoute.get('/', async (req, res) =>{
    let employee = req.body;  
    const emp = Employee.find({});
    console.log(emp);
    res.json(employee);
});

/**
 * Registra un nuevo empleado en la BD
 */
employeeRoute.post('/', (req, res) => {
    res.send('Desde POST empleado');
});

/**
 * Modifica el resgistro de un empleado
 */
employeeRoute.put('/', (req, res) =>{
    res.send('desde PUT ');
});

/**
 * ELimina el registro de un empleado de la BD
 */
employeeRoute.delete('/', (req, res) =>{
    res.send('desde DELETE ');
});


module.exports = employeeRoute;