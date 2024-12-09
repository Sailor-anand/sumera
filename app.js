const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send("Hello world anand");
}
);
app.listen(500,()=>{
  console.log("server is at 500");
} );
