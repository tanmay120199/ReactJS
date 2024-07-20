import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'Cart',
    initialState:{
        items:["burger","pizza"],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    },
});
console.log('cartSlice',cartSlice)
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;