const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../db/userModel");


const loginController =  async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    const isEqual = await bcrypt.compare(password, user.password);
    if( isEqual ) {
        const token = jwt.sign({ email }, password);
        res.json({
            msg: 'login Exitoso',
            token
        });
    }else{
        res.json({
            msg: 'Password Incorrecto'
        });
    }
} 

module.exports = loginController;