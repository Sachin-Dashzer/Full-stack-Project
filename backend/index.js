import express from 'express';
import 'dotenv/config';

const app = express();


const Port = process.env.PORT || 4000;


app.get("/hell" , (req , res)=>{

    res.send("<h1>hello bro </h1>")
})


app.listen( Port , ()=>{

    console.log(`the server is runnig at ${Port}`);
})