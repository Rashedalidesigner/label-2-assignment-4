import { Query } from "pg";
import { prisma } from "../../lib/prisma";
import { IProperties, IPropertyQuey, IQuey } from "./property.interface";
import { title } from "node:process";

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

const getallProperties = async (query: IPropertyQuey)=>{
    const result = await prisma.properties.findMany({
        where:{
            AND:[
                query.price? {title:query.title}:{},
                query.location?{location:query.location}:{},
                query.category?{category:query.category}:{}
            ]
        }
    })
    return result;
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