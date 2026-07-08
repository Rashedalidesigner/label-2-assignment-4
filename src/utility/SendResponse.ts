import { Response } from "express";
import httpStatus from "http-status";

type Tmeta = {
    page:number,
    limit:number,
    total:number
}

type TResponse<t> = {
    success:boolean,
    statusCode:number,
    message:string,
    data?: t;
    meta?:Tmeta
}

export const SendResponse = <T>(res:Response,data:TResponse<T>)=>{
    res.status(data.statusCode).json({
        success:data.success,
        statusCode:data.statusCode,
        message:data.message,
        data:data.data,
        meta:data.meta
    })
}