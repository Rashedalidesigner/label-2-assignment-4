import { prisma } from "../../lib/prisma"
import { ICategories } from "./Categories.interface";

const getallCategory = async()=>{
    const getallcategory = await prisma.categories.findMany({
        include:{
            prpperties:true
        }
    });
    return getallcategory;
}

const createCategore = async (categorydata: ICategories) => {
    const { name, description } = categorydata;
    const creteCategore = await prisma.categories.create({
        data: {
            name,
            description
        },
    });
    return creteCategore;
};

const updateCreateCategory = async(categorydata:ICategories)=>{
    const { id, name, description } = categorydata;
    const updateCategory = await prisma.categories.update({
        where:{
            id
        },
        data:{
            name,
            description
        }
    });
    return updateCategory;
};

const deleteCategory = async (id:string)=>{
    const deleteCategory = await prisma.categories.delete({
        where:{
            id
        }
    });
    return deleteCategory;
}

export const CategoryService = {
    createCategore,getallCategory,updateCreateCategory,deleteCategory
}