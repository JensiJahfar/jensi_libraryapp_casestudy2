const express = require("express");
const addbookrouter = express.Router();

addbookrouter.get('/',function(req,res){
    res.render("addbook",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'},{link:'/addbook',name:'New Book'}],
      title:'Library',
    
    });
});





module.exports = addbookrouter;