const connectDB = require("./db/mongoConnect");
const initServer = require("./server");

async function main() {
    await connectDB();
    await initServer();
}

main().catch(err => console.log(err));


