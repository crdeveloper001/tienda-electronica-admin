export interface IUserAccounts{
    _id:Number;
    clientUriProfile?:string
    clientName:string;
    clientLastName:string;
    clientPhone:Number;
    clientEmail:string;
    clientDirection:string;
    clientUsername:string;
    clientPassword:string;
    clientRoleType:string;
    userAccountActive?:boolean;
    jwt?:string;
}