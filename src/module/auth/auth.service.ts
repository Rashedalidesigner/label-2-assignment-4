import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
import { ILogin } from "./auth.interface";
import { Token } from "../../utility/Token";
import config from "../../config/config";


const login = async (userdata:ILogin)=>{
    const {email,password} = userdata;

    const userExits = await prisma.user.findUnique({where:{email}});
    if(!userExits){
        throw new Error("user not Exits");
    }
    const password_is_Mached = await bcrypt.compare(password,userExits.password);
    if(!password_is_Mached){
        throw new Error("password is invalid! plase try again");
    }

    const token_data = {
        id:userExits.id,
        name:userExits.name,
        email:userExits.email,
        role:userExits.role
    }
    const tokendata = {
        access_token:await  Token(token_data,config.access_token_secret,config.access_token_expeir),
        refresh_token:await Token(token_data,config.refresh_token_secret,config.refresh_token_expeir)
    }
    return tokendata
}

const refreshToken = ()=>{
    
}



export const authService = {
    login,refreshToken
}