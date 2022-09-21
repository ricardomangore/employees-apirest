const { Schema, model} = require('mongoose');

const userSchema = Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        requrie: true
    },
    status: {
        type: Boolean,
        require: true
    } 
});

userSchema.methods.toJSON = function () {
    const {__v, _id, ...usuario} = this.toObject();
    usuario.id = _id;
    return usuario;
}

const User = model('User', userSchema);

module.exports = User;