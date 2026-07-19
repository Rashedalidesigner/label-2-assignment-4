import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync"
import { userService } from "./User.service";
import { SendResponse } from "../../utility/SendResponse";
import httpStatus from "http-status";

const UserCreated = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const user = await userService.createUserToDb(req.body);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"User created successfull",
        data:{user}
    })
});
const getAllUser = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const user = await userService.getallUserFromDb();
    

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Get All User Successfull",
        data:user
    });
});




export const userController = {
    UserCreated,getAllUser
}