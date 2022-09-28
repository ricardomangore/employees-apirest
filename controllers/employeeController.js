const {validationResult} = require('express-validator');
const Employee = require('../db/employeeModel');


const employeeController = async (req, res) => {    
    console.log('ejecutando POST');
    const employee = new Employee(req.body);
    try {
        await employee.save();
        res.json({
            status: 200,
            msg: 'El registro se guarod exitosamente',
            obj: req.body
        });
    } catch (error) {
        res.json({
            status: 400,
            msm: 'EL registor no se guardo'
        });
    } 
    
}

module.exports = employeeController;
