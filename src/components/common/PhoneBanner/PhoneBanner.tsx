import { Img } from "../../HeaderNavigation"

export const PhoneBanner = () => {
  return (
    <div className="hidden md:flex bg-[#F7DDD0] justify-around items-center w-[100%]">
        <img className="h-fit" src={Img.left}/>
        <div className="flex flex-col py-10 w-[380px] ">
            
            <p className="font-normal text-lg text-[#465D6B]">MAGSAFE</p>
            <p className="text-sm text-[#555]"> Snap on a magenetic case, wallet or both . And get faster wireless charging.</p>

        </div>
        <img src={Img.iphone}/>
        <img src={Img.right}/>
        
    </div>
  )
}
