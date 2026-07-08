import jwt, { SignOptions } from "jsonwebtoken";
import config from "../config/config";

type userdata = {
    id:string,
    name:string,
    email:string,
    role:string
}


export const Token = async (userdata:userdata,token_secret:string,token_expeir:string)=>{
    const token = jwt.sign(userdata,token_secret,{
        expiresIn:token_expeir
    } as SignOptions);

    // console.log(token)
    return token;
}