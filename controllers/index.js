



const request=require("request")
const Message=require("../models/Message")
const Book=require("../models/Book")
const sendMessage=(req,res,err)=>{

    console.log(req.body.data)
    new Message({...req.body.data}).save(()=>{
        res.json({success:true})
    })
}
const getMessages=(req,res,err)=>{
    Message.find({},(err,messages)=>{
        res.json({success:true,messages})
    })
}
module.exports={
  
  sendMessage,
  getMessages
    

}