import express from 'express';
import Route from './Routes/Route.js';
const app = express();
const PORTS = 8000;


//middleware
app.use((req,res,next)=>{
    //it is constant need that function nex
    //everytime request recived that request
    //is pass into middle so we need next();
    // if next is not here, the request is go to logging
    next();
})

app.use(express.json());

app.use(Route);



app.listen(PORTS,()=>{
    console.log("Ports are working")
})