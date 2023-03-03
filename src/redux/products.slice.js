import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsList: {
        isFetching: false,
        data: [],
        error: null,
    },
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsFetchStart: (state) => {
            state.productsList = {
                isFetching: true,
                data: [],
                error: null,
            };
        },

        productsFetchSuccess: (state, action) => {
            state.productsList = {
                isFetching: false,
                data: action.payload,
                error: null,
            };
        },

        productsFetchError: (state, action) => {
            state.productsList = {
                isFetching: false,
                data: [],
                error: action.payload,
            };
        },

        resetProducts: (state) => {
            state.productsList = initialState.productsList;
        },
    },
});

export const { actions: productsActions, reducer: productsReducer } =
    productsSlice;
