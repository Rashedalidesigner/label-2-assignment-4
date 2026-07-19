import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import { reviewServerice } from "./review.service";
import { SendResponse } from "../../utility/SendResponse";
import httpStatus from "http-status";

const createReview = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const tenant_id = req.user?.id as string;
    const result =await reviewServerice.createReview(req.body,tenant_id);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Create Review Successfull",
        data:result
    });
});


export const ReviewController = {
    createReview
}