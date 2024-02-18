import { createSlice } from '@reduxjs/toolkit';
import { Img } from '../../../assets/icons';

const initialState={
    name:'',
    email:'',
    address:'',
    phone:''  ,
    paymentname:'Paypal',
    paymentimage:Img.paypal,
    shipmentname:'Delhivery'
};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:{
        
        addCustomer:(state,action)=>{
            const {firstname,lastname,email,address,phone} = action.payload;
            state.name=firstname+''+lastname
            state.email=email
            state.address=address
            state.phone=phone
        },
        addPayment:(state,action)=>{
            const retailerName = action.payload; 
            console.log(retailerName)
            state.paymentname=retailerName

        },
        addShipment:(state,action)=>{
            const name=action.payload;
            state.shipmentname=name
    },

    
}});

export const {addCustomer,addPayment,addShipment} = customerSlice.actions;
export default customerSlice.reducer;