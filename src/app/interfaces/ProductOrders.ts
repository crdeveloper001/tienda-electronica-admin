import { IProducts } from "./Products";
import { IUserAccounts } from "./UserAccounts";

export interface IProductOrders{
    _id:string;
    client:IUserAccounts;
    products:IProducts[];
    productOrderTotalPrice:Number;
}