var mongoose=require("mongoose");
var schema=mongoose.Schema;
var Book=new schema({

title:String,
publisher:String,
writer_name:String,
year:String,
address:String,
abstract:String,
videoUrl:String,
voiceUrl:String,
image:String


})
module.exports=mongoose.model("Book",Book);

