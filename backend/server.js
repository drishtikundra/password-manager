const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const userRoute=require("./routes/userRoutes");
// const User=require("./models/userModel");
const cors=require("cors");
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.URI).then(()=>{
    console.log("db connected")
    app.listen(process.env.PORT || 8000, (err)=>{
        if(err) console.log(err);
        console.log('running successfully at',process.env.PORT);
    });
}).catch((error)=>{
    console.log("error",error);
});
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use("/",userRoute)