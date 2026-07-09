import { prisma } from "../../lib/prisma";
import { IProperties } from "./property.interface";

const createProperties = async (properties:IProperties)=>{    
    const {landlord_id,category_id,title,description,bathroom,bedroom,location,price,amenities} = properties;
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

const getallProperties = async ()=>{
    const result 
}

const getPropertiesDetile = async (id:string)=>{
    const result =await prisma.properties.findMany({
        where:{
            id
        }
    });

    return result;
};

const updateProperties = async (properties:IProperties)=>{
    const {id,landlord_id,category_id,title,description,bathroom,bedroom,location,price,amenities} = properties;
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
    const result =await prisma.properties.delete({
        where:{
            id
        }
    });
    return result;
};

export const Propertiescontroller = {
    createProperties,getallProperties,getPropertiesDetile,updateProperties,deleteproperties
};