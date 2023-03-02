import { ProductI } from "./../../types/ProductI";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type initialStateI = ProductI[];

const initialState: initialStateI = [];

export const basketReducer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<ProductI[]>) {
      return action.payload;
    },
    addToBasket(state, action: PayloadAction<ProductI>) {
      const product = action.payload;
      state.push(product);
    },
    removeFromBasket(state, action: PayloadAction<ProductI>) {
      const { id } = action.payload;
      state = state.filter((e) => e.id !== id);
      return state;
    },
  },
});
