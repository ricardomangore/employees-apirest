const jwt = require('jsonwebtoken');

const jwt_validator = (req, res, next) =>{
    console.log(req.get('token'));
   
        const { email } = jwt.verify(req.get('token'),process.env.SECRET_PHRASE);
        console.log('---------------------TOK---------------------');
        console.log(email);
        req.mail = email;
    next();
}

module.exports = jwt_validator;