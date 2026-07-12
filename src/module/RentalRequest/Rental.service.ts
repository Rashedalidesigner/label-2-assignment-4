import { prisma } from "../../lib/prisma";
import { IRentalRequest } from "./RentalRequest.interface";

const submitRentalRequest = async (userdata:IRentalRequest)=>{
    const {tenant_id,property_id,moveInDate} = userdata;
    const result = prisma.rentalRequest.create({
        data:{
            tenant_id,
            property_id,
            moveInDate:new Date(moveInDate)
        }
    });
    return result;
};

const getRentalRequest = async ()=>{
    const result = prisma.rentalRequest.findMany();
    return result;
}

const updateRentalRequest = async(requestData:IRentalRequest)=>{
    const {status,id} = requestData;
    const result = prisma.rentalRequest.update({
        where:{
            id
        },
        data:{
            status
        }
    });
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

const landlordRequest = async (userid:string)=>{
    const landlordProperty = prisma.rentalRequest.findMany({
        where:{
            property:{
                landlord_id:userid
            }
        }
    });
    return landlordProperty;
}


export const RentalReequestService = {
    submitRentalRequest,updateRentalRequest,landlordRequest,
    getRentalRequest,getReltalRequestDetiles
}