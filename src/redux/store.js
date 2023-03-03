import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { productsReducer } from "./products.slice";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export function setupStore(preloadedState) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}
