import { Product } from "../models/product.model";
import { initialProductsState, productsReducer, ProductsState } from "./index";
import { ProductsActions } from "../action-types";

const reducer = productsReducer;
it("ProductActions.productsLoaded should load products correctly", () => {
  const products = [
    newProduct(),
    newProduct(),
    newProduct()
  ];
  const state = reducer(initialProductsState, ProductsActions.productsLoaded({ products }));

  expect(state.products).toEqual(products);
});

it("ProductActions.updateProductQuantity should update product quantity correctly", () => {

  const state = reducer({ products: [newProduct()], loading: false, error: null },
    ProductsActions.updateProductQuantity({ newQuantity: newProduct().quantity + 1, id: newProduct().id }));

  let changedProduct = newProduct();
  changedProduct.quantity++;

  let newState: ProductsState = {
    loading: false,
    error: null,
    products: [changedProduct]
  };
  expect(state).toEqual(newState);
});

it("ProductActions.deleteProduct should update product quantity correctly", () => {

  const state = reducer({ products: [newProduct()], loading: false, error: null },
    ProductsActions.deleteProduct({ id: newProduct().id }));

  let newState: ProductsState = {
    loading: true,
    error: null,
    products: []
  };
  expect(state).toEqual(newState);
});

it("ProductActions.productDeleted should turn loading off", () => {

  const state = reducer({ products: [newProduct()], loading: true, error: null },
    ProductsActions.productDeleted());

  let newState: ProductsState = {
    loading: false,
    error: null,
    products: [newProduct()]
  };
  expect(state).toEqual(newState);
});


function newProduct(): Product {
  return {
    id: "edf3127c-491b-4063-836f-d8125dc732eb",
    name: "betsys i'm comming for you!",
    quantity: 6,
    price: 888,
    image: "https://www.topgear.com/sites/default/files/2022/09/_MH26481.jpg"
  };
}
