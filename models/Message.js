var mongoose=require("mongoose");
var schema=mongoose.Schema;
var Message=new schema({

text:String,
email:String,
name:String,
phone:String


})
module.exports=mongoose.model("Message",Message);