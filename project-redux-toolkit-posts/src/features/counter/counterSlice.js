import { createSlice } from "@reduxjs/toolkit";

export  const counterSlice = createSlice({
    name:"counterData",
    initialState:{
        counter:0,
        userName:'loay'
    },
    reducers:{
        increment: (state)=>{
            state.counter+=1
        },
        decrement: (state)=>{
            state.counter-=1
        },
        incrementByAmount:(state,action)=>{
            state.counter += action.payload
        },
        updateUserName :(state,action)=>{
            state.userName = action.payload
        }
    }
})
export  const {increment,decrement,incrementByAmount,updateUserName} = counterSlice.actions
export default counterSlice.reducer