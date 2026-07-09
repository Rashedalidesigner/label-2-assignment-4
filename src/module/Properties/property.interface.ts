export interface IProperties {
    id:string;
    landlord_id :string ;
    category_id :string ;
    title :string;
    description: string;
    location :string;
    price: number;
    bedroom :number;
    bathroom :number;
    amenities? :string[];
}