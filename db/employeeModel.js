const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const employeeSchema = new Schema({
    name: 'String',
    age: 'Number',
    salary: 'Number'
});


const Employee = model('Employee', employeeSchema);

module.exports = Employee;


