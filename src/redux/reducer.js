import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name :'token',
    initialState : {
        person : null,
        product : [],
    },
    reducers :{
        login : (state,action)=>{
            state.person= action.payload
        },
        logout:(state) =>{
            state.person = null
        },
        addProduct :(state,action) =>{
            state.product = state.product || [];
             state.product.push(action.payload)
        },
        deleteProduct : (state,action) =>{
            state.product = state.product.filter((item) => item.id !== action.payload.id);
        }
    }
})

export const {login,logout,addProduct,deleteProduct} = userSlice.actions;
export default userSlice.reducer;