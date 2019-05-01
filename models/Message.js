var mongoose=require("mongoose");
var schema=mongoose.Schema;
var Message=new schema({

text:String,
email:String,
name:String,
phone:String,
title:String


})
module.exports=mongoose.model("Message",Message);