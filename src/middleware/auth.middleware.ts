import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../utility/CatchAsync";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { SendResponse } from "../utility/SendResponse";
import httpStatus from "http-status";
import { role } from "../../prisma/generated/prisma/enums";
import { prisma } from "../lib/prisma";

declare global {
    namespace Express {
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


export const auth = (...requiredRoles: role[]) => {
    return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token: string | undefined = req.cookies.accessToken;
        const roles = requiredRoles.length ? requiredRoles : [role.ADMIN, role.LANDLORD, role.TENANT];
        if (!token) {
            SendResponse(res, {
                success: false,
                statusCode: httpStatus.FORBIDDEN,
                message: "plase provide a token"
            })
            return;
        }
        const verifedToken = jwt.verify(token as string, config.access_token_secret) as IVerifiedToken;
        if (!verifedToken) {
            SendResponse(res, {
                success: false,
                statusCode: httpStatus.UNAUTHORIZED,
                message: "Token is not valid"
            })
            return;
        };
        const { name, email, role: idRole, id } = verifedToken;
        req.user = {
            name,
            email,
            role: idRole as role,
            id
        } as IUser;

        // console.log(verifedToken.role);
        if (!roles.includes(verifedToken.role)) {
            SendResponse(res, {
                success: false,
                statusCode: httpStatus.FORBIDDEN,
                message: "Insufficient permissions"
            })
            return;
        }

        const user = await prisma.user.findUnique({
            where:{
                id,name,email
            }
        });

        if(!user){
            throw new Error("User not found. plase log in again.");
        };
        if(user.is_Banned===true){
            throw new Error("Your account has been blocked. plase contacts support.");
        }
        next();
    })
}