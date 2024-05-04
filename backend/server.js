const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const { ConnectionStates } = require("mongoose");
dotenv.config({path:"backend/config/config.env"});
connectDB();

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(" shutting the down the server due to uncaught Exception");
    process.exit(1);
})
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