const express = require('express');
const employeeRoute = require('./routes/employees.route');
const loginRoute = require('./routes/login.route');
const userRoute = require('./routes/users.route');
const port = process.env.PORT;
const app = express();

const apiEmployeesPath = '/api/employees';
const apiUsersPath = '/api/users';
const loginPath = '/login';
const readmePath = '/readme';

const initServer = async () => {
    //Registra Middlewares
    app.use(express.json());
    
    
    //End points or Routes
    //Registramos la ruta en la aplicación
    app.use(apiEmployeesPath, employeeRoute);
    app.use(apiUsersPath, userRoute);
    app.use(loginPath, loginRoute);
    app.get(readmePath, (req, res) => {
        res.send('Hola README');
    });

    
    
    
    
    app.listen(port, () => {
        console.log(`The server is runign in the port ${port}`);
    });
}

module.exports = initServer;