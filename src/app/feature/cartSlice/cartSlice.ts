/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { WomenList } from '../../../utilities/dummydata';


const initialState={
    Arr: WomenList,
    
};

export const cartSlice = createSlice({
    name: 'Array',
    initialState,
    reducers:{
    addCart:(state,action:{payload:string,type:string})=>{
            const movieIndex = state.Arr.findIndex((movie) => movie.id === action.payload);
            state.Arr[movieIndex].incart = !state.Arr[movieIndex].incart;
    },
    setFav:(state,action:{payload:string,type:string})=>{
        const movieIndex = state.Arr.findIndex((movie) => movie.id === action.payload);
        state.Arr[movieIndex].like = !state.Arr[movieIndex].like;
    },
    updateCart: (state, action: { payload: Array<any>, type: string }) => {
        state.Arr = [...action.payload];
    },
    }});

export const {addCart,setFav, updateCart} = cartSlice.actions;
export default cartSlice.reducer;