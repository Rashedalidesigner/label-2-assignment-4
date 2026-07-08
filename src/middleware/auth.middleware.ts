import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../utility/CatchAsync";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { SendResponse } from "../utility/SendResponse";
import httpStatus from "http-status";
import { role } from "../../prisma/generated/prisma/enums";

declare global {
    namespace Express{
        interface Request {
            user?: IUser | undefined;
        }
    }
}

interface IUser {
    name: string;
    email: string;
    role: role;
    id: string;
}

interface IVerifiedToken extends jwt.JwtPayload {
    name: string;
    email: string;
    role: role;
    id: string;
}

export const authMiddleware = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const token: string | undefined = req.cookies.accessToken;
    
    const requirdRole = [role.ADMIN,role.TENANT];
    if(!token){
        SendResponse(res,{
            success:false,
            statusCode:httpStatus.FORBIDDEN,
            message:"plase provide a token"
        })
    }
    const verifedToken = jwt.verify(token as string,config.access_token_secret) as IVerifiedToken;
    if(!verifedToken){
        SendResponse(res,{
            success:false,
            statusCode:httpStatus.UNAUTHORIZED,
            message:"Token is not valid"
        })
    };
    const {name,email,role:idRole,id} = verifedToken;
    req.user = {
        name,
        email,
        role: idRole as role,
        id
    } as IUser;

    // console.log(verifedToken.role);
    if(!requirdRole.includes(verifedToken.role)){
        throw Error
    }

    // if(!requirdRole==verifedToken.role){

    // }
    next();
})