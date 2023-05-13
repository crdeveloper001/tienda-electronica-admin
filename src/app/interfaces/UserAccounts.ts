export interface IUserAccounts{
    _id:Number;
    clientName:string;
    clientLastName:string;
    clientPhone:Number;
    clientEmail:string;
    clientDirection:string;
    clientUsername:string;
    clientRoleType:string;
    UserAccountActive?:string;
    JWT?:string;
}