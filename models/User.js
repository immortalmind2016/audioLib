

var mongoose=require("mongoose");
var schema=mongoose.Schema;
var User=new schema({

 email:{
     type:String,
     unique:true
 },
 password:String

 

})
module.exports=mongoose.model("User",User);