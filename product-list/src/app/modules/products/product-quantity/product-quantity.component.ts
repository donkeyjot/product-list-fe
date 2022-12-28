import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, take, tap } from "rxjs";
import { Product } from "../models/product.model";
import { Store } from "@ngrx/store";
import { ProductsState } from "../reducers";
import { productDetail } from "../product.selectors";
import { ProductsActions } from "../action-types";
import { isOkNumber } from "../../../shared/utils/number.utils";

@Component({
  selector: "app-product-quantity",
  templateUrl: "./product-quantity.component.html",
  styleUrls: ["./product-quantity.component.scss"]
})
export class ProductQuantityComponent implements OnInit {
  @Input() id: string = "";

  productData$: Observable<Product | undefined> = new Observable<Product>();
  quantityControl: FormControl = new FormControl(0);

  constructor(
    private state: Store<ProductsState>
  ) {
  }

  ngOnInit(): void {
    this.productData$ = this.state.select(productDetail(this.id));
    this.productData$.pipe(
      take(1),
      tap(value => {
        if (value && isOkNumber(value.quantity)) {
          this.quantityControl.setValue(value.quantity);
        }
      })
    ).subscribe();
    this.initHandleQuantityChange();
  }

  private initHandleQuantityChange() {
    this.quantityControl.valueChanges
      .subscribe(newQuantity => {
        if (isOkNumber(newQuantity))
          this.state.dispatch(ProductsActions.changeProductQuantity({ id: this.id, newQuantity }));
      });
  }
}
