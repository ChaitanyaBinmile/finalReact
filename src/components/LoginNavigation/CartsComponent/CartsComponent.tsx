import { Img } from "../../HeaderNavigation";
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addCart } from "../../../app/feature/likeSlice/cartSlice";
import { Checkbox } from "@mui/material";
import { AddShoppingCart, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";


type ColorType = 'light' | 'dark';


export const CartsComponent = ({ color }: { color: ColorType }) => {

  const dispatch = useAppDispatch();

  const cartArr = useAppSelector((state=>state.cartArray.Arr))

  const CartArr = cartArr.filter(({incart}) => incart === true)

  let total = 0;
  let item = 0;
    CartArr.forEach(({price})=>{
        total+=price;
        item+=1
    })

  const toggleCart = (id: string) => {
    dispatch(addCart(id));
    };

  return (
    <div className="flex gap-2 items-center">
      <li className="flex gap-1 group z-50 relative dropdown items-center cursor-pointer\">
      {color === 'light' ? <Img.card/> : <Img.card2/>}
      <div className="flex gap-3">
      <h2>Cart</h2>
      <div className="bg-[#63be63] rounded-full w-6 h-6 flex justify-center items-center text-[white]">
        {item}
      </div>
      </div>
      <div className="group-hover:block dropdown-menu absolute hidden h-auto top-6 right-[-5px]">
      <div className="bg-[#262626] h-[20px] w-[100%] hidden md:block"></div>


<ul className="w-80 bg-white shadow px-6 py-8">
{
  CartArr.length===0?<div className="text-[#504f4f] text-center">Your basket is empty. Check out our fashion website to add your fashion trends to the basket </div>:<div></div>
}
  {
    CartArr.map(({id,name,image,price,incart})=>
    <div className='flex flex-col gap-4 mt-2'>

      <div className='flex justify-between items-center'>
        <img className='h-10 w-10 ' src={image} alt="" />
        <div className='flex flex-col gap-1'>
        <p className='text-black text-xs font-medium'>{name}</p>
        <p className='text-black text-md font-light'>${price}</p>
        </div>
        <Checkbox
          icon={<AddShoppingCart />}
          checked={incart}
          checkedIcon={<ShoppingCart />}
          onClick={()=>toggleCart(id)}

        />
      </div>
      <div className='w-[100%] h-[1px] bg-[#c9c8c8]'></div>
    </div>
    )
  }
{
  CartArr.length===0?<div className="flex items-center justify-center mt-6">
    <Link to='/women'>
    <button className='bg-[#3d6cd1] py-2 px-6 rounded font-medium text-[14px]'>Discover What Is New
    </button>
    </Link>
    </div>:<div><div className='m-4 flex justify-around items-center'>
  <p className='text-black text-xs'> Total</p>
  <p className='text-black font-semibold'> ${total.toFixed(2)}</p>
  </div>
  <div className='mt-4 flex justify-around'>
    <Link to='/checkout'>
      <button className='bg-[#3d6cd1] py-2 px-6 rounded font-medium text-[13px] text-white'>View Bag</button>

    </Link>
  <button className='text-black py-2 px-6 rounded text-[13px] font-medium border-[1px] border-black'>Checkout</button>
  </div></div>
} 
</ul>
</div>
      </li>
    </div>
  );
};
