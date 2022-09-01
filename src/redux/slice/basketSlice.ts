import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketCount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state) => {
      state.basketCount += 1;
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
