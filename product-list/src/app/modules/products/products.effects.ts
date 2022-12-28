import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "./products.service";
import { ProductsActions } from "./action-types";
import { catchError, debounceTime, map, of, switchMap, tap } from "rxjs";
import { ErrorState } from "./reducers";

@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      switchMap(() => {
        return this.productsService.getProducts();
      }),
      map(products => ProductsActions.productsLoaded({ products })),
      catchError(err => {
        const error: ErrorState = {
          code: err.code
        };
        return of(ProductsActions.loadError({ error }));
      })
    ));

  changeProductQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.changeProductQuantity),
      tap((action) =>
        this.productsService.handleProductQuantityChange(action.id, action.newQuantity)
      )), { dispatch: false });

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      debounceTime(500),
      switchMap(action => {
        return this.productsService.deleteProduct(action.id);
      }),
      map(() => ProductsActions.productDeleted()),
      catchError(err => {
        const error: ErrorState = {
          code: err.code
        };
        return of(ProductsActions.loadError({ error }));
      })
    ));

  updateProductQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProductQuantity),
      debounceTime(500),
      switchMap(action => {
        return this.productsService.updateProductQuantity(action.id, action.newQuantity);
      }),
      map(product => ProductsActions.productQuantityUpdated({ product })),
      catchError(err => {
        const error: ErrorState = {
          code: err.code
        };
        return of(ProductsActions.loadError({ error }));
      })
    ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private productsService: ProductsService
  ) {
  }

}
