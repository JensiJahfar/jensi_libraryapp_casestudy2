const express = require("express");
const loginrouter = express.Router();

loginrouter.get('/',function(req,res){
    res.render("login",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:'Library',
    
    });
});
loginrouter.get('/submit',function(req,res){
  res.send("Successfully Logged in");
 
});




module.exports = loginrouter;