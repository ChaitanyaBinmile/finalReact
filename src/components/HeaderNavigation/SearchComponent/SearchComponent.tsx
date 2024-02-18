import { Img } from "./index"

export const SearchComponent:React.FC = () => {
  return (
    <div className="flex p-2 border-[1px] border-[#D9D9D9] rounded-md w-[100%] m-2 lg:w-[420px] items-center justify-between ">
        <input placeholder="Search Products" className="text-[10px] sm:text-sm 2xl:text-base outline-none   "/>
        <div className="flex items-center justify-around gap-1  md:gap-2">
          <p className="text-[10px] sm:text-sm xl:text-sm">All categories</p>
          <Img.arrow/>
          <div className="border-r-[1px] border-slate-200 h-8 w-1 "/>
          <Img.search/>
        </div>
    </div>
  )
}
