import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { addCart } from '../../../../app/feature/cartSlice/cartSlice';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from '@mui/material';
import { DeleteOutline, RecyclingRounded } from '@mui/icons-material';
import { CircleComponent } from '../../../women/Navbar/CircleComponent.tsx/CircleComponent';

export const CartComponent = () => {

    const dispatch = useAppDispatch();

    const cartArr = useAppSelector((state=>state.cartArray.Arr))

    const CartArr = cartArr.filter(({incart}) => incart === true)
  
    const toggleCart = (id: string) => {
      dispatch(addCart(id));
      };

  return (
    
        
    <div className='  gap-6 md:gap-0 items-center max-w-[600px]'>
        <div className='flex flex-col gap-6'>
        {
  CartArr.length===0?<div className="text-[#504f4f] text-center">Your basket is empty. Check out our fashion website to add your fashion trends to the basket </div>:<div></div>
}
  {
    CartArr.map(({id,name,image,price,incart})=>
    <div className='flex flex-col gap-4 mt-2'>

          
        
      <div className='flex justify-between items-center bg-slate-200 pl-2 rounded-md'>
        <Link to={`/product/${id}`}>
        <div className='flex gap-8 items-center '>

        <img className='h-16 w-16 rounded-md object-cover object-top' src={image} alt="" />
        <div className='flex flex-col gap-2 '>
            <p className='text-black text-md font-medium'>{name}</p>
            <p className='flex items-center text-black text-md font-light'>color
            <CircleComponent color='blue'/>
            </p>
        </div>
        
        <p className='text-black text-md font-light'>${price}</p>
        </div>
        
        </Link>
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
  <div className="flex items-center justify-center mt-6"><Button  variant="contained" className='bg-[#3d6cd1] py-2 px-6 rounded font-medium text-[14px] text-white'>Discover What Is New
    </Button>
  </div>
  </Link>
  :<div></div>
} 
        </div>
        
       
    </div>
    
  )
}
