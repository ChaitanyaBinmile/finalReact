import{ useState } from 'react'
import {  useAppSelector } from '../../../app/hooks';
import { Img } from '../../../assets/icons';
import { Checkbox } from '@mui/material';

export const CheckoutDetailComponent = () => {


    const cartArr = useAppSelector((state=>state.cartArray.Arr))
  
    const CartArr = cartArr.filter(({incart}) => incart === true)

    const [gift, setGift] = useState(false)

    function giftToggle(){
        
            setGift(!gift)
    
    }
    let total = 0;
    
      CartArr.forEach(({price})=>{
          total+=price;
        
      })
    const tax = total*0.18
    const price =  tax+total+(gift?10.90:0);

  return (
    <div className='w-[100%] md:w-fit self-end'>
         <div className='p-8 w-[90vw] md:w-[370px] lg:w-[400px] sm:min-w-[400px]  h-fit bg-[#E9E9E9] flex flex-col gap-6 rounded self-end   '>
            <p className='font-medium'> Order Summary</p>
            <div className='flex w-[100%] justify-between'>
                <p className='font-light text-sm'>Price</p>
                <p className='text-sm'> ${total.toFixed(2)}</p>
            </div>
            <div className='flex w-[100%] justify-between'>
                <p className='font-light text-sm'>Shipping</p>
                <p className='text-sm'> $0</p>
            </div>
            <div className='flex w-[100%] justify-between'>
                <p className='font-light text-sm'>Tax</p>
                <p className='text-sm'> ${tax.toFixed(2)}</p>
            </div>
            <div className='flex w-[100%] justify-between'>
                <p className='font-light text-sm'>Discount Price</p>
            </div>
            <div className='flex w-[100%] items-center gap-4'>
                <Img.pointer/>
                <p className='font-light text-xs text-[red]'>You must log in to use the discount code</p>
            </div>
            <div className='flex w-[100%] justify-between items-center gap-4'>
                <div className='flex items-center'>
                    <Checkbox
                    checked={gift}

                    color="primary"
                    onChange={() => giftToggle()}
                    />
                        <p className='font-light text-sm'>Pack in a Gift Box</p>
                </div>
                <p className='text-sm'>{gift?10.90:0}</p>

            </div>
            <div className='w-[100%] bg-[#dadada] h-[2px]'></div>
            <div className='flex justify-between'>
                <p className='text-sm font-medium'>Total Price</p>
                <p className='text-sm font-medium'> ${price.toFixed(2)}</p>
            </div>
            <div className='flex gap-4 bg-[#434343] justify-center rounded py-4 px-8'>
                <img src={Img.lock}/>
                <p className='text-white'>CHECKOUT</p>
            </div>
        </div>
    </div>
  )
}
