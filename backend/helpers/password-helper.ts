import brcypt from 'bcryptjs';
import PrintLog from './print-log';

export const generatePassword =async(ogpassword:string):Promise<string | undefined>=>{

    try{
        const password = await brcypt.hash(ogpassword,12);
        return password;


    }catch(err){
        PrintLog("Error while generating password =>"+err);
        return ;
    }





}

export const comparePassword =async(hashPassword:string,password:string):Promise<boolean>=>{

    try{
        const isSame = await brcypt.compare(password,hashPassword)
        return isSame;


    }catch(err){
        PrintLog("Error while generating password =>"+err);
        return false ;
    }





}