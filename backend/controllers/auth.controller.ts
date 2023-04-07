import * as userService from '../services/user.service';
import {generatePassword,comparePassword} from '../helpers/password-helper';
import { RequestHandler } from 'express';
import {v1 as uuid} from 'uuid';
import PrintLog from '../helpers/print-log';
import SendResponse from '../helpers/send-response';



export const SignInController:RequestHandler = async(req,res,next)=>{

    const {username,email,password} = req.body;

    try{
        const userId = uuid();
        const hashPassword =await generatePassword(password);
        if(hashPassword){

            const user = await userService.create({userId,username,email,password:hashPassword});
            return res.status(200).json({
                message:"user created successfully",
                result:true,
                data:user
            });
        }else{
            throw Error;
        }




    }catch{
        PrintLog("Error while signing in user");
        return res.status(200).json({
            message:"could not create user",
            result:true,
            data:null
        });

    }




}


export const GetUserController:RequestHandler =async (req,res,next) => {
    
    const userId:string = req.body.userId;
    try{
        const user = await userService.getOne(userId);

        return SendResponse(res,
            200,
            "user in data",
            true,
            user
            )


    }catch(err){
        
        return SendResponse(res,
            200,
            "user in data",
            true,
            err
            )


    }



}
