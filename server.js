import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const Notes=[]

app.use("/css",express.static("node_modules/bootstrap/dist/css"));
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
  res.render("today.ejs",{Note:Notes});
  console.log(res.body)
});

app.get("/work",(req,res)=>{
  res.render("work.ejs",{Note:Notes});
  console.log(res.body)
});

app.post("/submit",(req,res)=>{
  Notes.push(req.body["Ntext"])
  
  res.render("today.ejs",{Note:Notes})
})

app.post("/submit-work",(req,res)=>{
  Notes.push(req.body["Ntext"])
  
  res.render("work.ejs",{Note:Notes})
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

