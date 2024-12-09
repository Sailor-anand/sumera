const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send("Hello world anand");
}
);
app.listen(20,()=>{
  console.log("server is at 20");
} );
