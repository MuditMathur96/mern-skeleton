import UserModel from "../models/user.model";
import { User as UserType} from '../types';

type ReturnType<T>=Promise<T | undefined>;

export const create =async(user:UserType)=>{
    const newUser = new UserModel(user);
    await newUser.save();

    return user;
}

export const getOne = async(userId:string):ReturnType<UserType>=>{
    
    const user = await UserModel.findOne({userId});

    if(user){
        return user;
    }else{
        return undefined;
    }


}

export const getMany = async(userIds:UserType[]):ReturnType<UserType[]>=>{

    const users =await UserModel.find({userId:{$in:userIds}});

    if(users.length){
        return users
    }else{
        return undefined;
    }



}

export const updateOne = async(userId:string,data:UserType):ReturnType<boolean>=>{

    const updatedUser =await UserModel.updateOne({userId:userId},{
        $set:{...data}
    })

    if(updatedUser){
        return true;
    }else{
        return false;
    }


}