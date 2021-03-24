const express = require("express");
const loginrouter = express.Router();
loginrouter.get('/',function(req,res){
    res.render("login",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}],
      title:'Library',
    
    });
});
loginrouter.get('/login',function(req,res){
  
  res.render('book',{
   
  })
});




module.exports = loginrouter;