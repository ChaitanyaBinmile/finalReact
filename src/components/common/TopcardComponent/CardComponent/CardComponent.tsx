import { Img } from "../../../HeaderNavigation";
import { FavoriteBorder } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { Checkbox, Rating } from "@mui/material";

export const CardComponent = () => {
  return (
    <div className="flex flex-col shadow-xl rounded-md">
    
      <img className="object-cover object-top" src={Img.photo} />
      <div className="flex flex-col relative p-4 gap-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="px-2 text-[13px] font-medium">Zara</p>
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
          <p className="text-[red] text-sm font-medium">$228</p>
          <p className="text-[#9D9D9D] text-sm ">
            <del>$290</del>
          </p>
          <p className="text-xs font-light text-[red]">-10%</p>
        </div>
      </div>
    </div>
  );
};
