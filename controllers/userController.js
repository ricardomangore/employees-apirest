const User = require("../db/userModel");
const bcrypt = require("bcryptjs");


const userGetController = (req, res, next) => {
    res.json({
        msg: 'DESDE GET'
    });
}

const userPostController = async (req, res) => {
    const { email, password } = req.body;
    let salt = bcrypt.genSaltSync(10);
    let  passHash = bcrypt.hashSync(password, salt);
    console.log(passHash);
    const user = new User({
        email,
        password: passHash
    });

    const u = await user.save();
    console.log(u);
    res.json(user);
}

const userPutController = (req, res, next) => {
    res.json({
        msg: 'DESDE PUT'
    });
}

const userDeleteController = (req, res, next) => {
    res.json({
        msg: 'DESDE DELETE'
    });
}

module.exports = {
    userGetController,
    userPostController,
    userPutController,
    userDeleteController
}