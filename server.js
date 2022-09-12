const express = require('express');
const employeeRoute = require('./routes/employees.route');
const port = 3030;
const app = express();

const apiEmployeesPath = '/api/employees';


const initServer = async () => {
    //Registra Middlewares
    app.use(express.json());
    
    
    
    //End points or Routes
    //Registramos la ruta en la aplicación
    app.use(apiEmployeesPath, employeeRoute);
    
    
    
    
    app.listen(port, () => {
        console.log(`The server is runign in the port ${port}`);
    });
}

module.exports = initServer;