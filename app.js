const dbConnect = require("./db/mongoConnect");
const initServer = require("./server");


const main = async () => {
   await dbConnect();
   await initServer();
}


main().catch( e => { console.log(e);});
