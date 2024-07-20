import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore=configureStore({
    reducer:{
        //list of reducers in children
        cart:cartReducer,
    },
});

export default appStore;