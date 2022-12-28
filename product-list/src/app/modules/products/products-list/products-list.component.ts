import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { Store } from "@ngrx/store";
import { ProductsState } from "../reducers";
import { ProductsActions } from "../action-types";
import { allProducts, loading, totalPrice } from "../product.selectors";
import { deleteProduct } from "../products.actions";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]> = new Observable<Product[]>();
  totalPrice$: Observable<number> = new Observable<number>();
  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private state: Store<ProductsState>
  ) {
  }

  ngOnInit(): void {
    this.state.dispatch(ProductsActions.loadProducts());
    this.products$ = this.state.select(allProducts);
    this.totalPrice$ = this.state.select(totalPrice);
    this.loading$ = this.state.select(loading);
  }

  deleteProduct(id: string) {
    this.state.dispatch(deleteProduct({ id }));
  }
}
