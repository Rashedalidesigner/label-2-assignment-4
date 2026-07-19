import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../utility/CatchAsync";
import { SendResponse } from "../../utility/SendResponse";
import httpStatus from "http-status";
import { PropertyService } from "./Properties.service";

const CreateProperties = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const createdProperties = await PropertyService.createProperties(req.body)
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Property Created Successfull",
        data:createdProperties
    });
});
const getAllProperties = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
// console.log("first","from get all property page")
    const createdProperties = await PropertyService.getallProperties(req.query);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Get all Property",
        data:createdProperties
    });
});
const getPropertiesDetiles = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    // console.log("first")
    const id = req.params.id as string;
    const result = await PropertyService.getPropertiesDetile(id);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Get Property Detile",
        data:result
    });
});
const updateProperties = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string;
    const createdProperties = await PropertyService.updateProperties(id,req.body);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"update property Successfull",
        data:createdProperties
    });
});
const deleteProperties = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string;
    if(!id){
        return Error("plase provide a id");
    }
    const ids = id.trim();
    const createdProperties = await PropertyService.deleteproperties(ids);

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Deleted property successfull",
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