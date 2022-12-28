import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsListComponent } from "./products-list/products-list.component";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { ProductsEffects } from "./products.effects";
import { StoreModule } from "@ngrx/store";
import { productsReducer } from "./reducers";
import { ProductsService } from "./products.service";
import { ProductQuantityComponent } from "./product-quantity/product-quantity.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomCurrencyPipe } from "../../shared/pipes/currency.pipe";

export const routes = [
  {
    path: '',
    component: ProductsListComponent,
  }
]
@NgModule({
  declarations: [
    ProductsListComponent,
    ProductQuantityComponent,
    CustomCurrencyPipe,
  ],
  providers:[
    ProductsService,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("products", productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
