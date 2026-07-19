import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
import { IUser } from "./user.interface";
import config from "../../config/config";

const createUserToDb = async(userdata:IUser)=>{
    const {name,email,password,phone,role} = userdata;
    const userExits = await prisma.user.findUnique({where:{email}});
    if(userExits){
        throw new Error("user already exits");
    };
    if(role==="ADMIN"){
        throw new Error("plase type correct role");
    }
    const hashedPassword = await bcrypt.hash(password,Number(config.access_token_solt_round));
    const user = prisma.user.create({
        data:{
            name,
            email,
            phone,
            password:hashedPassword,
            role,
        }
    });

    return user;
};

const getallUserFromDb = async()=>{
    const user = await prisma.user.findMany({
        omit:{
            password:true
        }
    });
    return user;
}


export const userService = {
    createUserToDb,getallUserFromDb
}