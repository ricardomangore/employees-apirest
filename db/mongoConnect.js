const mongoose = require('mongoose');

const dbConnect = async () => {
    
    await mongoose.connect('mongodb://127.0.0.1:27017/recursos_humanos');

}

module.exports =  dbConnect;





