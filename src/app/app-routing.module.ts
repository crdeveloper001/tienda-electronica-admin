import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";

import { MenuComponent } from "./components/menu/menu.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AppLogsComponent } from "./components/app-logs/app-logs.component";
import { UserAccountsComponent } from "./components/user-accounts/user-accounts.component";
import { ProductsComponent } from "./components/products/products.component";

const routes: Routes = [
  { path: "Login", component: LoginComponent },
  { path: "Menu", component: MenuComponent },
  { path: "Profile", component: ProfileComponent },
  { path: "AppLogs", component: AppLogsComponent },
  { path: "UserAccountsDB", component: UserAccountsComponent },
  { path: "ProductsDB", component: ProductsComponent },
  { path: "**", redirectTo: "Login", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
