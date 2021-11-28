// configureStore is from redux toolkit and allows us to set up the data layer
import { configureStore } from '@reduxjs/toolkit';
// nav slice is used to store the current page
import navReducer from './slices/navSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
})