import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./reducers";

export const selectProductState = createFeatureSelector<ProductsState>("products");

export const allProducts = createSelector(
  selectProductState,
  (productState) => productState.products
);

export const productDetail = (id: string) => createSelector(
  selectProductState,
  (productState) => productState.products.find(
    product => product.id === id)
);

export const totalPrice = createSelector(
  selectProductState,
  (productState) => {
    return productState.products
      .flatMap(product => product.price * product.quantity)
      .reduce((sum, val) => {
        return sum + val;
      }, 0);
  });

export const loading = createSelector(
  selectProductState,
  (productState) => productState.loading
);
