import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { CatchAsync } from "../../utility/CatchAsync";
import { CategoryService } from "./Categories.service";
import { SendResponse } from "../../utility/SendResponse";

const getAllCategory = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    console.log("from");
    const result = await CategoryService.getallCategory();
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Get All Category Successfull",
        data:result
    })
})
const createCategory = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await CategoryService.createCategore(req.body);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Category Created Successfull",
        data:result
    })
})
const updateCategory = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await CategoryService.updateCreateCategory(req.body);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Category Updated Successfull",
        data:result
    })
});
const deleteCategory = CatchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const id = req.params.id as string;
    const result = await CategoryService.deleteCategory(id);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Category delete Successfull",
        data:result
    })
});

export const CategoryController = {
    createCategory,updateCategory,getAllCategory,deleteCategory
}

