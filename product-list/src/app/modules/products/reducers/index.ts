import { createReducer, on } from "@ngrx/store";
import { ProductsActions } from "../action-types";
import { Product } from "../models/product.model";

export interface ErrorState {
  code: number;
  message?: string;
}

export interface ProductsState {
  products: Product[];
  error: ErrorState | null;
  loading: boolean;
}

export const initialProductsState: ProductsState = {
  products: [],
  error: null,
  loading: false
};

export const productsReducer = createReducer(
  initialProductsState,

  on(ProductsActions.loadProducts, (state, action) => {
    return {
      ...state,
      loading: true
    };
  }),

  on(ProductsActions.productsLoaded, (state, action) => {
    return {
      ...state,
      products: action.products,
      loading: false
    };
  }),

  on(ProductsActions.loadProductDetail, (state, action) => {
    return {
      ...state,
      loading: true
    };
  }),

  on(ProductsActions.productDetailLoaded, (state, action) => {
    return {
      ...state,
      products: [...state.products, action.productDetail],
      loading: false
    };
  }),

  on(ProductsActions.updateProductQuantity, (state, action) => {
    const productToUpdate = state.products.find(product => action.id === product.id);
    const productToUpdateIndex = state.products.findIndex(product => action.id === product.id);
    if (productToUpdate) {
      const updatedProduct = {
        ...productToUpdate,
        quantity: action.newQuantity
      };

      const updatedProducts = [...state.products];
      updatedProducts[productToUpdateIndex] = updatedProduct;

      return {
        ...state,
        products: updatedProducts,
        loading: false
      };
    } else return {
      ...state,
      loading: false
    };
  }),

  on(ProductsActions.productQuantityUpdated, (state, action) => {
    return {
      ...state,
      loading: false
    };
  }),

  on(ProductsActions.deleteProduct, (state, action) => {
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id),
        loading: true
      };
    }
  ),

  on(ProductsActions.productDeleted, (state, action) => {
    return {
      ...state,
      loading: false
    };
  }),

  on(ProductsActions.loadError, (state, action) => {
    return {
      ...state,
      loading: false
    };
  })
);
