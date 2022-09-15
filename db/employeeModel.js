const {Schema, model} = require('mongoose');

const employeeShema = Schema({
    name: String,
    nss: Number,
    salary: Number
});

const Employee = model('Employee', employeeShema);

module.exports = Employee; 

