import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/UserAccountsComponents/login/login.component';
import { ProfileComponent } from './components/UserAccountsComponents/profile/profile.component';
import { AppLogsComponent } from './components/Others/app-logs/app-logs.component';
import { UserAccountsComponent } from './components/UserAccountsComponents/user-accounts/user-accounts.component';
import { ProductsComponent } from './components/ProductsComponents/products/products.component';
import { ClientsOrdersComponent } from './components/Others/clients-orders/clients-orders.component';
import { NewProductComponent } from './components/ProductsComponents/new-product/new-product.component';
import { NewUserComponent } from './components/UserAccountsComponents/new-user/new-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditProductComponent } from './components/ProductsComponents/edit-product/edit-product.component';
import { UploadFilesComponent } from './components/Others/upload-files/upload-files.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    MenuComponent,
        ProfileComponent,
        AppLogsComponent,
        UserAccountsComponent,
        ProductsComponent,
        ClientsOrdersComponent,
        NewProductComponent,
        NewUserComponent,
        FooterComponent,
        EditProductComponent,
        UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
