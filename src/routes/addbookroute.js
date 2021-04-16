const express = require("express");
const addbookrouter = express.Router();
const Bookdata = require('../model/Databook');

addbookrouter.get('/',function(req,res){
    res.render("addbook",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'},{link:'/addbook',name:'New Book'}],
      title:'Library',
    
    });
});
addbookrouter.post('/add',function(req,res){
  var item = {
   book: req.body.books,
    author: req.body.author,
    genre:req.body.genre,
   image: req.body.image
  }
  var book = Bookdata (item);
  book.save();
  res.redirect('/books');

});





module.exports = addbookrouter;