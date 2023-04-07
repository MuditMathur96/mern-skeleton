import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';


import {connect} from './database/db'; 
import PrintLog from './helpers/print-log';

//import routes
import authRoute from './routes/auth.route'; 





 async function Main(){
    await connect();
    PrintLog("Running server");

    const app = express();
    
    app.use(express.json());
    app.use(morgan("dev"))
    app.use("/auth",authRoute);

    app.listen(8000,()=>{
        PrintLog("server started at 8000");
    })

 }

 Main();

