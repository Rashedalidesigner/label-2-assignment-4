import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import { Propertiescontroller } from "./Properties.service";
import { SendResponse } from "../../utility/SendResponse";
import httpStatus from "http-status";

const CreateProperties = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const createdProperties = await Propertiescontroller.createProperties(req.body);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Property Created Successfull",
        data:createdProperties
    });
});
const getAllProperties = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const createdProperties = await Propertiescontroller.getallProperties();

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Property Created Successfull",
        data:createdProperties
    });
});
const getPropertiesDetiles = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string;
    const createdProperties = await Propertiescontroller.getPropertiesDetile(id);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Property Created Successfull",
        data:createdProperties
    });
});
const updateProperties = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const createdProperties = await Propertiescontroller.updateProperties(req.body);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Property Created Successfull",
        data:createdProperties
    });
});
const deleteProperties = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string;
    if(!id){
        return Error("plase provide a id");
    }
    const createdProperties = await Propertiescontroller.deleteproperties(id);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Property Created Successfull",
        data:createdProperties
    });
});

export const PropertiesControler = {
    CreateProperties,
    getAllProperties,
    updateProperties,
    deleteProperties,
    getPropertiesDetiles
}