// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
// const User=require("../models/userModel");

// const router=express.Router();

// //create
// router.post("/",async(req,res)=>{
//     const {name,email,age}=req.body;
//     // const User=require("./models/userModel");
//     try{
//         const userAdded=await User.create({
//             name:name,
//             email:email,
//             age:age,
//         });
        
//         res.status(201).json(userAdded)

//     } catch(error){
//         console.log(error);
//         res.send(400).json({error:error.message})
//     }
// }
// )

// router.get("/",async (req,res)=>{
//     try{
//         const showAll=await User.find();
//         res.status(200).json(showAll);
//     } catch(error){
//         console.log(error)
//         res.send(500).json({error:error.message});
//     }
//     // res.send("api was running");
// });


// // get single user
// router.get("/:id",async (req,res)=>{
//     const {id}=req.params;
//     try{
//         const singleUser=await User.findById({_id:id});
//         res.status(200).json(singleUser);
//     } catch(error){
//         console.log(error)
//         res.send(500).json({error:error.message});
//     }
// });

// // delete
// router.delete("/:id",async (req,res)=>{
//     const {id}=req.params;
//     try{
//         const deletedUser=await User.findIdAndDelete({_id:id});
//         res.status(200).json(singleUser);
//     } catch(error){
//         console.log(error)
//         res.send(500).json({error:error.message});
//     }
// });
// module.exports=router;

const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

// Create
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        });

        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

// Read all users
router.get("/", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// Read single user
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findById(id);
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// Delete user
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

//update
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const {name,email,age}=req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id,req.body,{
            new:true
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
