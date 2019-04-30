var mongoose=require("mongoose");
var schema=mongoose.Schema;
var Analysis=new schema({

users:Number,
blind:Number,
voice_play:Number,
id:{
    type:Number,
    unique:true
}


})
module.exports=mongoose.model("Analysis",Analysis);