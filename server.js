const express = require('express');
const employeeRoute = require('./routes/employees.route');
const userRoute = require('./routes/users.route');
const port = 3030;
const app = express();

const apiEmployeesPath = '/api/employees';
const apiUsersPath = '/api/users';

const initServer = async () => {
    //Registra Middlewares
    app.use(express.json());
    
    
    //End points or Routes
    //Registramos la ruta en la aplicación
    app.use(apiEmployeesPath, employeeRoute);
    app.use(apiUsersPath, userRoute);
    
    
    
    
    app.listen(port, () => {
        console.log(`The server is runign in the port ${port}`);
    });
}

module.exports = initServer;