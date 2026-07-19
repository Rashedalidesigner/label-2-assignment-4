import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import httpStatus from "http-status";
import { RentalReequestService } from "./Rental.service";
import { SendResponse } from "../../utility/SendResponse";

const sabmitRentalRequest = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const tenant_id = req.user?.id as string;
    const RentalRequest = await RentalReequestService.submitRentalRequest(req.body,tenant_id);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Request Sabmit Successfull",
        data:RentalRequest
    })
});
const geuserRentalRequest = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const user_id = req.user?.id as string;
    const RentalRequest = await RentalReequestService.getrentalrequestforuser(user_id);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Get All Rental Request Successfull",
        data:RentalRequest
    })
});
const geuserRentalRequestDetile = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string;
    const user_id = req.user?.id as string;
    const RentalRequest = await RentalReequestService.getrentalrequestdetileforuser(user_id,id)

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Get All Rental Request Successfull",
        data:RentalRequest
    })
});
const getDetileRentalRequest = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const RentalRequest = await RentalReequestService.getReltalRequestDetiles(req.body);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Get Request Detile",
        data:RentalRequest
    })
});
const getlandlordRequest = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.user?.id as string;
    const RentalRequest = await RentalReequestService.landlordrentalrequest(id);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Get Request Detile",
        data:RentalRequest
    })
});
const updaterentalrequest = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string ;
    const updateRentalRequest = await RentalReequestService.landlordrentalrequestpermetion(id,req.body.status);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Get Request Detile",
        data:updateRentalRequest
    })
});






export const RentalRequestController = {
    getDetileRentalRequest,updaterentalrequest,geuserRentalRequest,sabmitRentalRequest,getlandlordRequest,geuserRentalRequestDetile
}