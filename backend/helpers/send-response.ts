import {Response} from 'express'

const SendResponse = (res:Response,status:number,message:string,result:boolean,data:any)=>{

    res.status(status).json({
        message:message,
        result:result,
        data:data
    })

}

export default SendResponse;