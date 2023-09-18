const express=require("express");
const mongoose=require("mongoose")
const userController=require("./controllers/user.controllers");
const registerController=require("./controllers/register.controllers");
const loginController=require("./controllers/login.controllers")
const cors=require("cors")
mongoose.set('strictQuery', true);

const app=express()
app.use(express.json());
app.use(cors())

app.use("/users", userController)
app.use("/register", registerController)
app.use("/login", loginController)

module.exports=app;