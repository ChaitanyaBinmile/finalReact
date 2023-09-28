import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addCart } from '../../app/feature/likeSlice/cartSlice';
import { Checkbox } from '@mui/material';
import { DeleteOutline, RecyclingRounded } from '@mui/icons-material';
import { CircleComponent } from '../women/Navbar/CircleComponent.tsx/CircleComponent';
import { CheckoutDetailComponent } from './detail/CheckoutDetailComponent';
import { Link } from 'react-router-dom';

export const CheckoutScreen = () => {

    const dispatch = useAppDispatch();

    const cartArr = useAppSelector((state=>state.cartArray.Arr))
  
    const CartArr = cartArr.filter(({incart}) => incart === true)


  
    const toggleCart = (id: string) => {
      dispatch(addCart(id));
      };



  return (
    <div className='flex-wrap flex justify-between p-8 lg:p-20 md:flex-nowrap gap-6 md:gap-0 items-center'>
        <div className='flex flex-col gap-6 w-[100%]  md:w-[60%]'>
        {
  CartArr.length===0?<div className="text-[#504f4f] text-center">Your basket is empty. Check out our fashion website to add your fashion trends to the basket </div>:<div></div>
}
  {
    CartArr.map(({id,name,image,price,incart})=>
    <div className='flex flex-col gap-4 mt-2'>

      <div className='flex justify-between items-center'>
        <div className='flex gap-8 items-center'>

        <img className='h-16 w-16 rounded-lg' src={image} alt="" />
        <div className='flex flex-col gap-2'>
            <p className='text-black text-md font-medium'>{name}</p>
            <p className='flex items-center text-black text-md font-light'>color
            <CircleComponent color='blue'/>
            </p>
        </div>
        
        </div>
        <p className='text-black text-md font-light'>${price}</p>
        
        <Checkbox
            icon={<RecyclingRounded />}
            checked={incart}
            checkedIcon={<DeleteOutline />}
            color="default"
            onClick={() => toggleCart(id)}
            />

      </div>
    
    </div>
    )
  }
{
  CartArr.length===0?
  <Link to='/women'>
  <div className="flex items-center justify-center mt-6"><button className='bg-[#3d6cd1] py-2 px-6 rounded font-medium text-[14px] text-white'>Discover What Is New</button>
  </div>
  </Link>
  :<div></div>
} 
        </div>
        <div className='flex flex-col gap-6'>
            <CheckoutDetailComponent/>
            <div className='flex border-[1px] border-[black] overflow-hidden rounded-md justify-between z-10 w-[100%] md:w-[400px] ' >
                <input placeholder='Enter Coupon Code' className='py-2 outline-none text-xs px-8'/>
                <div className='w-[35%] bg-[#262626] py-2 pl-2 text-[white] text- justify-center items-center text-center'>Login And Apply code</div>
            </div>
        </div>
       
    </div>
  )
}
