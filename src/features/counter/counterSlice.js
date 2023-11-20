import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0,
    name:'',
    products:null,
    cart:null
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value+=1
            state.cart=action.payload
        },
        decrement:(state)=>{
            state.value-=1
        },
        addDetails:(state,action)=>{
            state.name=action.payload
        },
        addProducts:(state,action)=>{
            state.products=action.payload
        }
    },
})
export const {increment,decrement,addDetails,addProducts}=counterSlice.actions
export default counterSlice.reducer
