const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
dotenv.config({path:"backend/config/config.env"});
connectDB();
const server = app.listen(process.env.PORT,()=>{
    console.log(`the http://localhost:${process.env.PORT} has been connected`);
})

process.on("unhandledRejection", (err)=>{
    console.log(`error: ${err.message}`);
    console.log(" shutting the down the server due to unhandled rejection");
    server.close(()=>{
        process.exit(1);
    })
})