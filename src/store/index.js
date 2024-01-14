import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import basketSlice from "./slices/BasketSlices";
import productsSlice from "./Slices";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  //   FLUSH,
  //   REHYDRATE,
  //   PAUSE,
  //   PERSIST,
  //   PURGE,
  //   REGISTER,
} from "redux-persist";
import { productsApi } from "../API/Products_api";

const rootReducer = combineReducers({
  // basketProducts: basketSlice,
  products: productsSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  //   {
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }
});

export const persistor = persistStore(store);

export default store;
