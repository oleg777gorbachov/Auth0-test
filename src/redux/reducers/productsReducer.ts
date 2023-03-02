import { FilterI } from "./../../types/FilterI";
import { ProductI } from "./../../types/ProductI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateI {
  isLoading: boolean;
  isError: boolean;
  filter: FilterI | null;
  products: ProductI[];
}

const initialState: initialStateI = {
  isError: false,
  isLoading: true,
  filter: null,
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductAction(state, action: PayloadAction<ProductI[]>) {
      state.isLoading = false;
      state.isError = false;

      state.products = action.payload;
    },
    setErrorAction(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
    setLoadingAction(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setFilterAction(state, action: PayloadAction<FilterI | null>) {
      state.filter = action.payload;
    },
  },
});
