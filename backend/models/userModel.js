const mongoose=require("mongoose");

//schema definition
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number
    }
},
{timestamps:true}
)

// model creation
const User=mongoose.model('User',userSchema)
module.exports=User;