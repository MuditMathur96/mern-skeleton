import mongoose from 'mongoose';
import PrintLog from '../helpers/print-log';
const MONGO_URL:string | undefined = process.env.MONGO_URL;

export const connect = async ()=>{

    if(MONGO_URL){
    
        try{
            await mongoose.connect(MONGO_URL);
            PrintLog("connected to database");
        }catch(err){
            PrintLog("Could not connect to database");
        }   
    }else{
        PrintLog("connection string not found");
    }
}
