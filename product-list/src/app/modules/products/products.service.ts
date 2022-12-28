import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "./models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ProductsActions } from "./action-types";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient, private store: Store<Product>) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.server}/products`);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.server}/products/${id}`);
  }

  updateProductQuantity(id: string, newQuantity: any): Observable<Product> {
    return this.http.patch<Product>(`${environment.server}/products/${id}/quantity`, { quantity: newQuantity });
  }

  handleProductQuantityChange(id: string, newQuantity: number) {
    if (newQuantity === 0) {
      this.store.dispatch(ProductsActions.deleteProduct({ id }));
    } else {
      this.store.dispatch(ProductsActions.updateProductQuantity({ id, newQuantity }));
    }
  }
}
