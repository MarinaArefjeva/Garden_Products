import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const сartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const isUnique = state.cart.every((el) => action.payload.id !== el.id);
      isUnique &&
        state.cart.push({
          ...action.payload,
          count: 1,
          total_price: action.payload.price,
          discont_total_price: action.payload.discont_price,
        });
    },

    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementProduct: (state, action) => {
      state.cart = state.cart.map((el) => {
        if (action.payload == el.id) {
          return {
            ...el,
            count: ++el.count,
            total_price: el.price * el.count,
            discont_total_price: el.discont_price * el.count,
          };
        }
      });
    },

    decrementProduct: (state, action) => {
      state.cart = state.cart.map((el) => {
        if (action.payload === el.id && el.count > 1) {
          return {
            ...el,
            count: el.count - 1,
            total_price: el.total_price - el.price,
            discount_total_price: el.discount_total_price - el.discont_price,
          };
        }
        return el;
      });
    },
  },
});

export const cartSelector = (state) => state.cart;
export const { addProduct, removeProduct, incrementProduct, decrementProduct } =
  сartSlice.actions;

export default сartSlice.reducer;
