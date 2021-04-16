const express =require("express");
const testRouter = express.Router();
const Bookdata=require('../model/Bookdata')



    testRouter.get('/',function(req,res){
        res.render("test", 
        {
            nav,
            title:'Library',
            
        });
    


    testRouter.post('/update',function(req,res){
    const old={
        title:req.body.update
    };
    const latest={
        
            $set:{
                title:req.body.title,
                author:req.body.author,
                genre:req.body.genre,
                image:req.body.image
            }
        
    };
    console.log(old);
    console.log(latest);
    
    Bookdata.updateOne(old,latest,function(req,res){
        var book=Bookdata(latest);
        book.save();
        res.redirect('/books');
    })
    

    });
    
  

    



module.exports= testrouter;