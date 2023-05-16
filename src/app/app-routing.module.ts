import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/UserAccountsComponents/login/login.component";

import { MenuComponent } from "./components/menu/menu.component";
import { ProfileComponent } from "./components/UserAccountsComponents/profile/profile.component";
import { AppLogsComponent } from "./components/Others/app-logs/app-logs.component";
import { UserAccountsComponent } from "./components/UserAccountsComponents/user-accounts/user-accounts.component";
import { ProductsComponent } from "./components/ProductsComponents/products/products.component";
import { ClientsOrdersComponent } from "./components/Others/clients-orders/clients-orders.component";
import { NewUserComponent } from "./components/UserAccountsComponents/new-user/new-user.component";
import { NewProductComponent } from "./components/ProductsComponents/new-product/new-product.component";

const routes: Routes = [
  { path: "Login", component: LoginComponent },
  { path: "Menu", component: MenuComponent },
  { path: "Profile", component: ProfileComponent },
  { path: "AppLogs", component: AppLogsComponent },
  { path: "UserAccountsDB", component: UserAccountsComponent },
  { path: "Add-New-User", component:NewUserComponent},
  { path: "ProductsDB", component: ProductsComponent },
  { path: "Add-New-Product", component:NewProductComponent},
  { path: "Clients-Orders",component:ClientsOrdersComponent},
  { path: "**", redirectTo: "Login", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
