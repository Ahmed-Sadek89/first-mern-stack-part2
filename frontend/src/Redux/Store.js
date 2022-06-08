import { configureStore } from '@reduxjs/toolkit';
// API_Slice
import productSlice from './API_Slice/Products.slice';
import productsInCatSlice from './API_Slice/ProductsInCat.slice';
// USER_Slice


export const Store = configureStore({
    reducer: {
        products: productSlice,
        productsInCat: productsInCatSlice
    }
})