import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        rollNo:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        lastSignInTime:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
)

const User = mongoose.model('User' , userSchema , 'users')
export default User;