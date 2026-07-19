import { paymentProvider, paymentStatus } from "../../../prisma/generated/prisma/enums";

export interface Payment {
    id: string;
    rentalRequest_id: string
    tenantId:string
    transaction_id:string 
    amount :string
    paymentProvider :paymentProvider
    status :paymentStatus
    customer_id :string
    sessionId :string
}