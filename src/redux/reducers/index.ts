import { basketReducer } from "./basketReducer";
import { productSlice } from "./productsReducer";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  products: productSlice.reducer,
  basket: basketReducer.reducer,
});

export default reducers;
