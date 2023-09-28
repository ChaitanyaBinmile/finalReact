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
}
}});

export const {addCart,setFav} = cartSlice.actions;
export default cartSlice.reducer;