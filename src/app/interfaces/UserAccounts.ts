export interface IUserAccounts{
    _id:Number;
    clientName:string;
    clientLastName:string;
    clientPhone:Number;
    clientEmail:string;
    clientDirection:string;
    clientUsername:string;
    clientPassword:string;
    clientRoleType:string;
    userAccountActive?:string;
    jwt?:string;
}