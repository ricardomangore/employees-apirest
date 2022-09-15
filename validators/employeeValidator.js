const Employee = require("../db/employeeModel")

const employeeValidator = async ( nss ) => {
    const employee = await Employee.findOne({ nss: nss});
    if(employee){
        throw new Error(`El empleado con NSS ${ nss } ya esta registrado`);
    }
}

module.exports = employeeValidator