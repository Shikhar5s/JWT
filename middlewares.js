const express=require("express")

const app=express();
const port=5050;
function userMiddleware(req,res,next){
 const username=req.query.body;
 const password=req.query.body;
    if(username!="Shikhar" && password!="pass"){
        res.status(403).json({
            msg:'something is wrong with your inputs',
        });
    }
        else{
            next();
        }
    
};

function kidneyMiddleware(req,res,next){
   const kidneyId=req.query.body;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg:"incorrect inputs"
        })
    }else{
        next()
    }



};

app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
res.send("your heart is healthy")


})


//app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){


    
//})
app.use("err",function(req,res,next){
    console.log("request is found")
})

app.listen(port,()=>{
    console.log("app is listening")
})