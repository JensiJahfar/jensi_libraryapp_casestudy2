const express = require("express");
const addauthorrouter = express.Router();

addauthorrouter.get('/',function(req,res){
    res.render("addauthor",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'},{link:'/addbook',name:'New Book'},{link:'/addauthor',name:'New Author'}],
      title:'Library',
    
    });
});





module.exports = addauthorrouter;