


const Router=require("express").Router();
const passport=require("../../config/auth")

const dashboardController=require("../../controllers/dashboard")

const multer = require('multer');





Router.post('/book',passport.authenticate("login",{session:false}),dashboardController.uploadBook)


/*
@url /api/dashboard/book/:id
@params id
@return {success:true or false}

*/

Router.delete('/book/:id',passport.authenticate("login",{session:false}),dashboardController.deleteBook)



Router.get('/book/:id',dashboardController.getBook)
Router.get('/book',dashboardController.getAllBooks)



Router.get("/analysis",dashboardController.getAnalysis)



Router.get("/setup",dashboardController.setup)
module.exports=Router