import mongoose  from "mongoose";
import {User as UserType} from "../types";


const UserModel = new mongoose.Schema<UserType>({

    userId:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    username:{
        type:String
    }

},{
    timestamps:true
});


export default mongoose.model("user",UserModel,"user");
