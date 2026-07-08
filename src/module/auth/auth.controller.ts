import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import { authService } from "./auth.service";
import { SendResponse } from "../../utility/SendResponse";
import httpStatus from 'http-status';

const login = CatchAsync(async (req:Request,res:Response,next:NextFunction)=>{
    const {access_token,refresh_token} = await authService.login(req.body);
    res.cookie("accessToken",access_token,{
        httpOnly:true,
        secure:false,
        sameSite:"none",
        maxAge:1000*60*60*24
    });

    res.cookie("refreshToken",refresh_token,{
        httpOnly:true,
        secure:false,
        sameSite:"none",
        maxAge:1000*60*60*24*7
    })

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"login Successfull",
        data:{access_token,refresh_token}
    })
});

export const authController = {
    login
}