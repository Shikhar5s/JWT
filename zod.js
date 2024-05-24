const express=require('express')

const app=express();

const port=8080;


const zod=require('zod')

function validateInput(obj){

const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)

    
})
const response=schema.safeParse(obj);
console.log(response);



}

app.post('/login',function(req,res){

    const response=validateInput(req.body)

    if(!response.success){

        res.json({
            msg:"your inputs are invalid"
        })
    
    }
    res.json({
        msg:"its fine"
    })







})
app.use(function(err,req,res,next){

    res.json({
        msg:"sorry server"
    })
})
app.listen(port,()=>{

    console.log('app is listening on port')
})






























































































































































































































