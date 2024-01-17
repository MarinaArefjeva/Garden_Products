import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

// const array=[2,3,5]
// const array2=array.filter(item=> item%2 == 0 )

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const isUnique = state.basket.every((el) => action.payload.id !== el.id);
      isUnique &&
        state.basket.push({
          ...action.payload,
          count: 1,
          total_price: action.payload.price,
          discont_total_price: action.payload.discont_price,
        });
    },

    removeProduct: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
    },

    incrementProduct: (state, action) => {
      state.basket = state.basket.map((el) => {
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
      state.basket = state.basket.map((el) => {
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

export const basketSelector = (state) => state.basketProducts;
export const { addProduct, removeProduct, incrementProduct, decrementProduct } =
  basketSlice.actions;

export default basketSlice.reducer;
