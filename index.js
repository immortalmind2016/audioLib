const request=require("request");
const express=require("express");
const user=require('./routes/api/user')
const index=require('./routes/api/index')
const dashboard=require('./routes/api/dashboard')
const config=require("./config")
const bodyParser=require("body-parser")
const Database=require("./config/database");
const mongoose=require("mongoose")
const Analysis=require("./models/Analysis")
mongoose.connect("mongodb://immortalmind:0115120323m@ds145346.mlab.com:45346/audiolib")
const app=express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.static(config.path))
app.use(function(req, res, next) {

     res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 /*
  res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Authorization, Accept");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,authorization, Accept");


        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
   
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");*/
  next();
});


// TEST




app.use("/api/dashboard",dashboard);

app.use("/api/index",index);
app.use("/api/user",user)
app.use("*",(req,res,err)=>{
  Analysis.findOneAndUpdate({id:1},{$inc:{"users":1}})
  res.sendFile(config.path+"index.html")
})
app.listen(8000,()=>{
    console.log("Server running on port 8000")
})