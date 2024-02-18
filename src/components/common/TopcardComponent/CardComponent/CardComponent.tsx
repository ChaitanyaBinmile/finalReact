import { FavoriteBorder } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { Checkbox, Rating } from "@mui/material";
import { useAppSelector } from "../../../../app/hooks";

export const CardComponent = () => {

  const Arr = useAppSelector(state=>state.cartArray.Arr)


  return (
    <div className="flex flex-row gap-4 h-auto ">
    {Arr.map((item)=>
      <div className="flex flex-col shadow-xl rounded-md w-[260px]">
        <img className="object-cover object-top rounded-t-md h-[350px]" src={item.image} />
        <div className="flex flex-col relative p-4 gap-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="px-2 text-[13px] font-medium">{item.name}</p>
              <p className="px-2 text-[10px] text-[#555]">
                Kimono & Caftan-Black-Regular-Fit
              </p>
            </div>
            <div>
              <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} color="error"/>
            </div>
          </div>
          <Rating/>
          <div className="px-2 flex gap-4 items-center ">
            <p className="text-[red] text-sm font-medium">${item.price}</p>
            <p className="text-[#9D9D9D] text-sm ">
              <del>${item.origPrice.toFixed(2)}</del>
            </p>
            <p className="text-xs font-light text-[red]">-10%</p>
          </div>
        </div>
      </div>
    
    )}
    </div>
  );
};
