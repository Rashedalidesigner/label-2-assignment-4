import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import { SendResponse } from "../../utility/SendResponse";
import httpStatus from "http-status";
import { paymentservice } from "./payment.service";

const createPayment = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  const {rental_id} = req.body;
  const result = await paymentservice.createPayment(rental_id);
    SendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"payment successfulls",
    data:result
  })

});

const confirmPayment = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  const {sessionId} = req.body;
  const result = await paymentservice.confirmPayment(sessionId);

  SendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"payment successfulls",
    data:result
  })
})
const getPayments = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  const id = req.user?.id as string;
  const result = await paymentservice.payments(id);

  SendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"payment successfulls",
    data:result
  })
})
const getPayment = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  const {id} = req.body;
  const result = await paymentservice.payment(id);

  SendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:"payment successfulls",
    data:result
  })
})

export const paymentControler ={
  createPayment,confirmPayment,getPayment,getPayments
}
