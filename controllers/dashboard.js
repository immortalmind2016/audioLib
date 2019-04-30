


var jwt = require('jsonwebtoken');
const request=require("request")
const Book=require("../models/Book")
const Message=require("../models/Message")
const Analysis=require("../models/Analysis")
var base64Img = require('base64-img');
const config=require("../config")
const fs=require("fs")

const makeDir = require('make-dir');
 
(async () => {
    const path = await makeDir(config.path+"/uploads/audio");
 
    console.log(path);
    //=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'
})();
const uploadBook=(req, res, next) => {
  const data=req.body.data
  let imageFile='/uploads/images/';
  let date=Date.now();
  let voice=data.voice.replace("data:audio/mp3;base64,","");
let ext=data.voice.split(';')[0]
ext=ext.split("/")[1]
if(!ext){
   return res.json({success:false})
}
let voiceFile=config.path+"/uploads/audio/"+date+"."+ext


base64Img.img(data.image,config.path+'uploads/images/',date, function(err, filepath) {

console.log("FILE PATH ",filepath)

fs.writeFileSync(voiceFile, Buffer.from(voice,"base64"),(err,file)=>{});

  let newBook=new Book({

...data,
voiceUrl:voiceFile.replace(config.path,""),
image:imageFile+date+"."+filepath.split(".")[1],
user_id:req.user._id
  })
  newBook.save((err,book)=>{
      console.log(book)
      res.json({success:true,book})
  })



});




}
const getBook=(req,res,err)=>{
 Book.findOne({_id:req.params.id},(err,book)=>{
     res.json({book})
 })
}
const getAllBooks=(req,res,err)=>{
Book.find({},(err,books)=>{
     res.json({books})
 })
}
const deleteBook=(req,res,err)=>{
 Book.findOneAndRemove({_id:req.params.id},(err,book)=>{
     if(!err){
         return res.json({success:true})
     }else{
         res.json({success:false})
     }
 })
}
const editBook=(req,res,err)=>{
 Book.findOneAndUpdate({_id:req.params.id},{...req.body.data},{new:true},(err,book)=>{
     if(!err){
         return res.json({success:true,book:book})
     }else{
         res.json({success:false})
     }
 })
}

const getAnalysis=(req,res,err)=>{
    Book.count({},(err,count)=>{
            Analysis.findOne({id:1},(err,analysis)=>{
                Message.count({},(err,count2)=>{
     res.json({...analysis,books:count,requests:count2})
                })
           
            })
    })

}
const setup=(req,res,err)=>{
new Analysis({
    id:1
}).save(()=>{
    res.send("DONE")
})
}



module.exports={
  uploadBook,
  getBook,
  deleteBook,
  getAllBooks,
  editBook,
  getAnalysis,
  setup
  
    

}