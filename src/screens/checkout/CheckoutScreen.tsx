import { useAppSelector } from '../../app/hooks';
import { Box, Tab} from '@mui/material';
import { CheckoutDetailComponent } from './detail/CheckoutDetailComponent';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { CartComponent } from './form/cart/CartComponent';
import { CustomerInfoComponent } from './form/CustomerInfo/CustomerInfoComponent';
import { PaymentComponent } from './form/payment/PaymentComponent';
import { ConfirmationComponent } from './form/confirmation/ConfirmationComponent';

export const CheckoutScreen = () => {

    const cartArr = useAppSelector((state=>state.cartArray.Arr))

    const CartArr = cartArr.filter(({incart}) => incart === true)

    const total = CartArr.length

    const [value, setValue] = useState('1');
    
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);}


  return (
    <div className='flex flex-col p-2 sm:px-8 lg:px-16 py-8 gap-8 items-center w-full'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant='scrollable' textColor="inherit"
         TabIndicatorProps={{style:{
          fontWeight:"bold",
          backgroundColor:"black"
        }}}>
            <Tab label={`CART(${total})`}value="1" />
            <Tab label="CUSTOMER INFO" value="2" />
            <Tab label="shipping & payment" value="3" />
            <Tab label="product confirmation" value="4" />
          </TabList>
        </Box>
        
        <div className='flex flex-wrap gap-2 justify-around p-8 items-center max-w-full'>
          <div className='w-[100%] max-w-[600px]'>
            
          <TabPanel value="1">
            <CartComponent/>
          </TabPanel>
          <TabPanel value="2" style={{ padding: '0px' }}>
            <CustomerInfoComponent/>
          </TabPanel>
          <TabPanel value="3" style={{ padding: '0px' }}>
            <PaymentComponent/>
          </TabPanel>
          <TabPanel value="4">
            <ConfirmationComponent/>
          </TabPanel>
          </div>
          <div className='flex flex-col gap-6 justify-center items-center w-fit'>
            <CheckoutDetailComponent/>
            <div className='flex border-[1px] border-[black] overflow-hidden rounded-md justify-between z-10 w-[100%] md:w-[400px] ' >
                <input placeholder='Enter Coupon Code' className='py-2 outline-none text-xs px-8'/>
                <div className='w-[35%] bg-[#262626] py-2 pl-2 text-[white] text- justify-center items-center text-center'>Login And Apply code</div>
            </div>
        </div>
        </div>
      </TabContext>
    </Box>

    </div>
  )
}
