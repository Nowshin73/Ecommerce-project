const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
dotenv.config({path:"backend/config/config.env"});
connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`the http://localhost:${process.env.PORT} has been connected`);
})