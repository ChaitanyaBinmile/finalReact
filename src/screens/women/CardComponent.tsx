import { AddShoppingCart,  FavoriteBorderSharp,  FavoriteSharp,  ShoppingCart } from "@mui/icons-material";
import { Checkbox, Rating } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addCart, setFav } from "../../app/feature/cartSlice/cartSlice";
import { Link } from "react-router-dom";


export const CardComponent = () => {

  const dispatch = useAppDispatch();

  const CartArr = useAppSelector((state=>state.cartArray.Arr))

  const toggleCart = (id: string) => {
    dispatch(addCart(id));
    };
  const toggleLike = (id: string) => {
    dispatch(setFav(id));
    };

  return (
    <div className="flex flex-wrap w-[100%] gap-10 sm:gap-8 py-[68px] justify-start">
    {
      CartArr.map(({id,name,image,incart,price,like,origPrice}) =>
      <div className="shadow-xl w-[288px] rounded-md" style={{ transition: 'all 5s ease-in-out' }}>
        <div className="relative">
          <img className="relative h-[350px] w-[100%] rounded-t-md object-cover z-20 object-top hover:z-0 " src={image} />
          <div className={`absolute top-0 right-0 p-4 ${like ? 'z-20' : ''} hover:z-20 transition-all ease-in-out duration-1000`}>
          <Checkbox
              icon={<FavoriteBorderSharp style={{ fontSize: '30px' }}/>}
              checked={like}
              checkedIcon={<FavoriteSharp style={{ fontSize: '30px' }}/>}
              color="error"
              onClick={()=>toggleLike(id)}
            />
          </div>


        </div>
        <div className="flex flex-col relative p-4 gap-2">
          <div className="flex justify-between items-center">
            <div>
            <Link to={`/product/${id}`}>
                <p className="px-2 text-[13px] font-medium cursor-pointer">{name}</p>
              </Link>
              <p className="px-2 text-[10px] text-[#555]">
                Kimono & Caftan-Black-Regular-Fit
              </p>
            </div>
            <div>
            <Checkbox
              icon={<AddShoppingCart />}
              checked={incart}
              checkedIcon={<ShoppingCart />}
              onClick={()=>toggleCart(id)}

            />
            </div>
          </div>
          <Rating/>
          <div className="px-2 flex gap-4 items-center ">
            <p className="text-[red] text-sm font-medium">${price}</p>
            <p className="text-[#9D9D9D] text-sm ">
              <del>${origPrice.toFixed(2)}</del>
            </p>
            <p className="text-xs font-light text-[red]">-10%</p>
          </div>
        </div>
      </div>
      )
    }
    </div>
  );
};
