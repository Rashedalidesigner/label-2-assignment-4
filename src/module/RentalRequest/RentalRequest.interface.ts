import { Interface } from "node:readline";

export interface IRentalRequest {
    id :string;
    tenant_id:string;
    property_id:string;
    moveInDate:Date;
}