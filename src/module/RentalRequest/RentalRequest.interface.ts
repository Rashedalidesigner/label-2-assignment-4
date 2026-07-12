import { rentalStatus } from "../../../prisma/generated/prisma/enums";
export interface IRentalRequest {
    id :string;
    tenant_id:string;
    property_id:string;
    status:rentalStatus;
    moveInDate:Date;
}