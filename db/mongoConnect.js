const mongoose = require('mongoose');

const dbConnect = async () => {
    
    await mongoose.connect(process.env.URL_MONGO_CONNECT);

}

module.exports =  dbConnect;





