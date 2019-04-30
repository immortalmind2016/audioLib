


const Router=require("express").Router();

const passport=require("../../config/auth")
const indexController=require("../../controllers/index")

Router.post("/send-message",indexController.sendMessage)
module.exports=Router