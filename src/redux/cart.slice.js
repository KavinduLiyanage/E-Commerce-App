import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {
        items: [],
    },
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = {
                items: [...state.cart.items, action.payload],
            };
        },

        // productsFetchSuccess: (state, action) => {
        //     state.productsList = {
        //         isFetching: false,
        //         data: action.payload,
        //         error: null,
        //     };
        // },

        // productsFetchError: (state, action) => {
        //     state.productsList = {
        //         isFetching: false,
        //         data: [],
        //         error: action.payload,
        //     };
        // },

        // resetProducts: (state) => {
        //     state.productsList = initialState.productsList;
        // },
    },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
