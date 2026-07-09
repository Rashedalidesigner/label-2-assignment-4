import { prisma } from "../../lib/prisma";
import { IReview } from "./review.interface";

 const createReview = async (reviewdata:IReview)=>{
    const {tenant_id,properties_id,rating,description}= reviewdata;
    const result = await prisma.review.create({
        data:{
            tenant_id,
            properties_id,
            rating,
            description
        }
    });
    return result
 };

export const reviewServerice = {
    createReview
}