import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import { SendResponse } from "../../utility/SendResponse";
import httpStatus from "http-status";
import { paymentservice } from "./payment.service";

const createPayment = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  const rentalid = req.body;
  const result = await paymentservice.createPayment(rentalid);
    SendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"payment successfulls",
    data:result
  })

})
const confirmPayment = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  // const result = await paymentservice.conframPayment();

  SendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"payment successfulls",
    // data:result
  })
})
const getPayments = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  // const result = await paymentservice.getpayments();

  SendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"payment successfulls",
    // data:result
  })
})
const getPayment = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  // const result = await paymentservice.getPayment();

  SendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"payment successfulls",
    // data:result
  })
})

export const paymentControler ={
  createPayment,confirmPayment,getPayment,getPayments
}
