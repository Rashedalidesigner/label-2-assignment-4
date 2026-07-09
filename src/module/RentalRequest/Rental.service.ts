import { prisma } from "../../lib/prisma";
import { IRentalRequest } from "./RentalRequest.interface";

const submitRentalRequest = async (userdata:IRentalRequest)=>{
    const {tenant_id,property_id,moveInDate} = userdata;
    const result = prisma.rentalRequest.create({
        data:{
            tenant_id,
            property_id,
            moveInDate
        }
    });
    return result;
};

const getRentalRequest = async ()=>{
    const result = prisma.rentalRequest.findMany();
    return result;
}

const getReltalRequestDetiles = async (id:string)=>{
    const result = prisma.rentalRequest.findMany({
        where:{
            id
        }
    });
    return result;
}


export const RentalReequestService = {
    submitRentalRequest,
    getRentalRequest,getReltalRequestDetiles
}