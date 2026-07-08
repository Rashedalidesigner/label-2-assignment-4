import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";

export const CatchAsync = (fn:RequestHandler)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            await fn(req,res,next);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                success:false,
                statusCode:httpStatus.INTERNAL_SERVER_ERROR,
                message:"Failed to register User",
                error:(error as Error).message
            })
        }
    }
}