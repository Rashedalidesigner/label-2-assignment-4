import { prisma } from "../../lib/prisma";
import { IReview } from "./review.interface";

 const createReview = async (reviewdata:IReview,tenant_id:string)=>{
    const {properties_id,rating,description}= reviewdata;
    console.log(reviewdata);
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