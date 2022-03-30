import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {SneakerPageComponent} from "./sneaker-page/sneaker-page.component";;
import {ProductPageComponent} from "./product-page/product-page.component";
import {ProductsComponent} from "./products/products.component";
import * as Buffer from "buffer";
import {BuyPageComponent} from "./buy-page/buy-page.component";

const routes: Routes = [{path: "sneaker/:id", component: SneakerPageComponent},
  {path: "buy/product/:id", component: ProductPageComponent},
  {path: "buy", component: BuyPageComponent},
  {path: "**", component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
