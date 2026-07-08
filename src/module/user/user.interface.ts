export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: "TENANT"|"LANDLORD"|"ADMIN";
    phone: string;
    is_Banned: boolean;
}
