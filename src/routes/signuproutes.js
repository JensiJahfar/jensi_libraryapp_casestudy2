const express = require("express");
const signuprouter = express.Router();
signuprouter.get('/',function(req,res){
    res.render("signup",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:'Library',
    
    });
});
signuprouter.get('/Submit',function(req,res){
  res.send("Successfully Signed Up");
 
});

module.exports = signuprouter;