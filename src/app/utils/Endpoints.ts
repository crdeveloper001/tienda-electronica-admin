export class Endpoints{
    public static BASE_ENDPOINT:string = "https://app-710bc097-528d-48f3-acde-438b63d8f6e0.cleverapps.io";
    // public static BASE_ENDPOINT:string = "https://localhost:7149";

    //Authorization URIS
    public static auth_Endpoint:string = "/api/Authorization";

    //Products URIS
    public static serviceProduct:string = "/api/Products";
    public static service_SearchOneProduct:string = "/api/Products/";

    //OrderedProducts URIS
    public static serviceProductOrder:string = "/api/ProductsOrders";
    
    //App Logs URIS
    public static serviceAppLogs:string = "/api/AppLogs";

    //User Accounts URIS
    public static serviceUserAccounts:string = "/api/UserAccounts";
    public static service_SearchUserAccount:string = "/api/UserAccounts/";
}