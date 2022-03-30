import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { SneakerComponent } from './sneaker/sneaker.component';
import { SneakerPageComponent } from './sneaker-page/sneaker-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SneakersComponent,
    SneakerComponent,
    SneakerPageComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    ProductPageComponent,
    BuyPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatSelectModule,
        MatToolbarModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
