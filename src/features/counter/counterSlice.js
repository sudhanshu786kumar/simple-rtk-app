import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0,
    name:''
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        addDetails:(state,action)=>{
            state.name=action.payload
        },
    },
})
export const {increment,decrement,addDetails}=counterSlice.actions
export default counterSlice.reducer