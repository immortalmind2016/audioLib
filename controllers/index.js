



const request=require("request")
const Message=require("../models/Message")
const Book=require("../models/Book")
const sendMessage=(req,res,err)=>{
    new Message({...req.body.data}).save(()=>{
        res.json({success:true})
    })
}
module.exports={
  
  sendMessage
    

}