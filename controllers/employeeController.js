const {validationResult} = require('express-validator');
const Employee = require('../db/employeeModel');


const employeeController = async (req, res) => {    
    console.log('POST');
    const errors = validationResult(req);
    console.log(errors.isEmpty());
    if(! errors.isEmpty()){
        console.log(errors.array()[0]);
        const { msg, param  } = errors.array()[0];
        res.json({
            msg: `${param} ${msg}`
        });    
    }else{

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
       
}

module.exports = employeeController;
