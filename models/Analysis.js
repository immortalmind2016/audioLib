var mongoose=require("mongoose");
var schema=mongoose.Schema;
var Analysis=new schema({

users:Number,
blind:Number,
voice_play:Number


})
module.exports=mongoose.model("Analysis",Analysis);