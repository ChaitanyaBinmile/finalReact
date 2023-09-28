import { Img } from "../../assets/icons"

export const ErrorScreen = () => {
  return (
    <div className="flex items-center justify-around flex-wrap ">
        <img src={Img.not} alt="" />
        <div className="flex flex-col border-2 p-6 border-grey rounded-md gap-2 w-[460px]">
            <p className="p-2">No results were found</p>
            <div className="flex gap-1 items-center"> 
                <Img.pointer/>
                <p className="text-[#555] text-sm">We recommend you to search different clear key words to get the best result.</p>
            </div>
            <div className="flex gap-1 items-center">
                <Img.pointer/>
                <p className="text-[#555] text-sm">You can see the most related purchased products bellow.  </p>
            </div>
        </div>
    </div>
    
  )
}
