const {Router} = require('express');
const { userGetController, userDeleteController, userPutController, userPostController } = require('../controllers/userController');

const userRoute = Router();

userRoute.get('/', userGetController);
userRoute.post('/', userPostController);
userRoute.put('/', userPutController);
userRoute.delete('/', userDeleteController);

module.exports = userRoute;