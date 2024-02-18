import { Button, Checkbox } from "@mui/material";
import { Img } from "..";
import { addCart, setFav } from "../../../app/feature/cartSlice/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { AddShoppingCart,  FavoriteRounded,  ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const FavComponents = () => {
  const dispatch = useAppDispatch();

  const cartArr = useAppSelector((state=>state.cartArray.Arr))

  const FavArr = cartArr.filter(({like}) => like === true)


  const toggleCart = (id: string) => {
    dispatch(addCart(id));
    };
    const toggleLike = (id: string) => {
      dispatch(setFav(id));
      };
  

  return (
    <div className="flex gap-2 items-center">
      <li className="flex gap-1 group z-50 relative dropdown items-center cursor-pointer\">
      <div className="flex gap-3">
        <Img.favourites/>
      <h2>Favourites</h2>
      
      </div>
      <div className="group-hover:block dropdown-menu absolute hidden h-auto top-6 right-[-5px]">
      <div className="bg-[#262626] h-[20px] w-[100%]"></div>
<ul className="w-80 bg-white shadow px-6 py-8">
  {
    FavArr.map(({id,name,image,price,incart,like})=>
    <div className='flex flex-col gap-4 mt-2'>
      <div className="flex gap-2">
      <Checkbox
          icon={<FavoriteRounded/>}
          checked={like}
          checkedIcon={<FavoriteRounded />}
          color="error"
          onClick={()=>toggleLike(id)}

        />

      <div className='flex w-[100%] justify-between items-center'>
        <img className='h-16 w-14 object-cover object-top' src={image} alt="" />
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
      </div>
      <div className='w-[100%] h-[1px] bg-[#c9c8c8]'></div>
    </div>
    )
  }
  {
   FavArr.length===0?<div className='mt-4 flex justify-around'>
   <Button variant='contained' className='bg-[#3d6cd1] py-2 px-6 rounded font-medium text-[13px]'>Your wishlist is empty !!</Button>
   </div>:
    <Link to='/checkout'>
   <div className='mt-4 flex justify-around'>
      <Button variant='contained' className='bg-[#3d6cd1] py-2 px-6 rounded font-medium text-[13px]'>View Bag</Button>
   </div>
    </Link>
  }
  
</ul>
</div>
      </li>
    </div>
  );
};
