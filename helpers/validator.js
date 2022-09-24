const {validationResult} = require('express-validator');

const custom_validator = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){//¿Errors NO es vaci@?
        const errores = errors.array();
        res.status(406).json({
            errores
        });
    }else{
        next();
    }
}

module.exports = custom_validator;