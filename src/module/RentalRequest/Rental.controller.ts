import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import httpStatus from "http-status";
import { RentalReequestService } from "./Rental.service";
import { SendResponse } from "../../utility/SendResponse";

const sabmitRentalRequest = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const RentalRequest = await RentalReequestService.submitRentalRequest(req.body);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Request Sabmit Successfull",
        data:RentalRequest
    })
});
const getallRentalRequest = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const RentalRequest = await RentalReequestService.getRentalRequest();

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Request Sabmit Successfull",
        data:RentalRequest
    })
});
const getDetileRentalRequest = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const RentalRequest = await RentalReequestService.getReltalRequestDetiles(req.body);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Request Sabmit Successfull",
        data:RentalRequest
    })
});


export const RentalRequestController = {
    getDetileRentalRequest,getallRentalRequest,sabmitRentalRequest
}