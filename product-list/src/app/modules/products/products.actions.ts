import { createAction, props } from "@ngrx/store";
import { ErrorState } from "./reducers";
import { Product } from "./models/product.model";

export const loadProducts = createAction(
  '[Products Page] Load Products Start'
);

export const productsLoaded = createAction(
  '[Product Effects] Products Load Success',
  props<{ products: Product[] }>()
);

export const loadProductDetail = createAction(
  '[Product Detail Page] Load Product Detail'
);

export const productDetailLoaded = createAction(
  '[Product Detail Page] Product Detail Loaded',
  props<{ productDetail: Product }>()
);

export const loadError = createAction(
  '[API] Load error',
  props<{ error: ErrorState }>()
);

export const changeProductQuantity = createAction(
  '[Product Quantity Component] Change product quantity',
  props<{ id: string, newQuantity: number }>()
);

export const deleteProduct = createAction(
  '[Product Effects] Delete product',
  props<{ id: string }>()
);

export const productDeleted = createAction(
  '[Products Effects] Product Delete Success'
);

export const updateProductQuantity = createAction(
  '[Product Effects] Update product quantity',
  props<{ id: string, newQuantity: number }>()
);

export const productQuantityUpdated = createAction(
  '[Product Effects] Update product quantity success',
  props<{ product: Product }>()
);


