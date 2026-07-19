import { Query } from "pg";
import { prisma } from "../../lib/prisma";
import { IProperties, IPropertyQuey } from "./property.interface";

const createProperties = async (properties:IProperties)=>{    
    const {landlord_id,category_id,title,description,bathroom,bedroom,location,price,amenities} = properties;
    // console.log(properties);
    const result =await prisma.properties.create({
        data:{
            landlord_id,
            category_id,
            title,
            description,
            bathroom,
            bedroom,
            location,
            price,
            amenities
        }
    });
    return result
};

const getallProperties = async (query?: any) => {
    const conditions = [
        query?.title ? { title: query.title } : null,
        query?.location ? { location: query.location } : null,
        query?.category ? { category: query.category } : null,
        query?.minPrice ? { price: { gte: Number(query.minPrice) } } : null,
        query?.maxPrice ? { price: { lte: Number(query.maxPrice) } } : null,
    ].filter(Boolean) as []
    return await prisma.properties.findMany({
        where: conditions.length > 0 ? { AND: conditions } : {}, 
        include:{
            review:true
        }
    });
};

const getPropertiesDetile = async (id:string)=>{
    const result =await prisma.properties.findMany({
        where:{
            id
        }
    });

    return result;
};

const updateProperties = async (id:string,properties:IProperties)=>{
    const {landlord_id,category_id,title,description,bathroom,bedroom,location,price,amenities} = properties;
    const result =await prisma.properties.update({
        where:{
            id
        },
        data:{
            landlord_id,
            category_id,
            title,
            description,
            bathroom,
            bedroom,
            location,
            price,
            amenities
        }
    });

    return result;
};

const deleteproperties = async (id:string)=>{
    const data = await prisma.properties.findUnique({
        where:{
            id:id
        }
    });
    // console.log(data)
    if(!data){
        return new Error("data not found ")
    }
    const result =await prisma.properties.delete({
        where:{
            id:id
        }
    });
    return result;
};

export const PropertyService = {
    createProperties,getallProperties,getPropertiesDetile,updateProperties,deleteproperties
};