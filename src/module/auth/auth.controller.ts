import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import { authService } from "./auth.service";
import { SendResponse } from "../../utility/SendResponse";
import httpStatus from 'http-status';
import jwt from "jsonwebtoken";
import config from "../../config/config";
import { prisma } from "../../lib/prisma";
import { Token } from "../../utility/Token";

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
        data:jwt.decode(access_token)
    })
});


const refreshToken = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken){
        throw new Error("plase provide token");
    }
    const verifiedToken = jwt.verify(refreshToken,config.refresh_token_secret);
    if(!verifiedToken){
        throw new Error("plase provide verified token");
    }
    // console.log(verifiedToken)
    const {name,email,role,id} = verifiedToken as jwt.JwtPayload;

    const userdata = {
        name,email,role,id
    }
    // console.log(userdata)
    
    const user = prisma.user.findUnique({where:{email}});
    if(!user){
        throw new Error("User does't exits");
    }
    const token = Token(userdata,config.access_token_secret,config.access_token_expeir);
    res.cookie("accessToken",token,{
        httpOnly:true,
        secure:false,
        sameSite:"none",
        maxAge:1000*60*60*24
    });
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Access Token create successfull",
        data:userdata
    });
});

export const authController = {
    login,refreshToken
}