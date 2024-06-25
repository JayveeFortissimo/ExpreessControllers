import Model from '../Models/Data.model.js';


function getData(req,res){
    res.json({status:200,data:Model})
}


function PushData(req,res){
    
    let Pukeki = false;

  const datax = {
    id:Model.length,
    name:req.body.name,
    
  }

    Model.forEach(prod =>{
     prod.name.includes(datax.name)?Pukeki = !Pukeki:false;
    })
    
   if(Pukeki){
    res.json({message:"Credentials are already exist"})
   }else{
     Model.push(datax);
     res.json({status:200,data:Model})
     console.log(Model);
   }
  
}



export{
    getData,
    PushData
}