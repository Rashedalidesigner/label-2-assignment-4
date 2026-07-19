import { rentalStatus } from "../../../prisma/generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { IRentalRequest } from "./RentalRequest.interface";

const submitRentalRequest = async (userdata:IRentalRequest,tenant_id:string)=>{
    const {property_id,moveInDate} = userdata;
    const result = prisma.rentalRequest.create({
        data:{
            tenant_id,
            property_id,
            moveInDate:new Date(moveInDate)
        }
    });
    return result;
};

const getrentalrequestforuser = async (id:string)=>{
    const result = prisma.rentalRequest.findMany({where:{tenant_id:id}});
    return result;
}
const getrentalrequestdetileforuser = async (tenantId:string,id:string)=>{
    const result = prisma.rentalRequest.findMany({where:{tenant_id:tenantId,id:id}});
    return result;
}

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

const landlordrentalrequest = async (userid:string)=>{
    const landlordProperty = prisma.properties.findMany({
        where:{
            landlord_id:userid
        },
        include:{
            rentalRequest:true
        }
    });
    return landlordProperty;
}
const landlordrentalrequestpermetion = async (id:string,status:rentalStatus)=>{
    console.log(status);
    const landlordProperty = prisma.rentalRequest.update({
        where:{
            id
        },
        data:{
            status
        }
    });
    return landlordProperty;
}


export const RentalReequestService = {
    submitRentalRequest,landlordrentalrequest,updateRentalRequest,getrentalrequestdetileforuser,
    getRentalRequest,getReltalRequestDetiles,getrentalrequestforuser,landlordrentalrequestpermetion
}