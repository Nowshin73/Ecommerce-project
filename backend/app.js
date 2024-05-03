const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");
app.use(express.json());

//product route

const product = require("./routes/productRouter");

app.use("/api/v1/",product);

// Middleware for Errors
app.use(errorMiddleware);
module.exports = app;