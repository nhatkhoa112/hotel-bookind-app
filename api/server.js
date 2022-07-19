const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();


const app = express();

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());


mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });


const server = app.listen(process.env.PORT, () =>
{
    console.log(`Server started on ${process.env.PORT}`)}
);