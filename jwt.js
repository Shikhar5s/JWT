const express=require('express')
const jwt=require("jsonwebtoken");

const jwtPassword="123456";

const app=express(); 
app.use(express.json());
const USERS=[
    {
        username:"shikhar@gmail.com",
        password:'123',
        name:'Shikhar Srivastava'

    },
    {
        username:"shikhar4953@gmail.com",
        password:'123',
        name:'Shikhar Malhotra'

    },
    {
        username:"shikhar6055@gmail.com",
        password:'123',
        name:'Shikhar Singh'
    },



];
function userExist(username,password){

const x=USERS.length;
for(let i=0; i<x; i++){
    if(USERS[i].username==username && USERS[i].password==password){
        return true;
    }
}
return false;

}

app.post('/signin',function(req,res){

const username=req.body.username;
const password=req.body.password;

if(!userExist(username,password)){
    
return res.status(403).json({
 msg:"user doesnot exist"

});

}
//function converts into token
var token=jwt.sign({username:username},jwtPassword);
// stores in local storage
return res.json({

    token,
});

});


app.get('/users', function(req,res){

    const token=req.headers.authorization;

   
        const decoded=jwt.verify(token,jwtPassword);
         username=decoded.username;

  res.json({
     users:USERS

  })





});

app.listen(5000);