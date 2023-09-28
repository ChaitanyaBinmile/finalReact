import { Img } from "../../../HeaderNavigation"

export const FootersearchComponent = () => {
  return (
    <div className="flex absolute top-[-80px] justify-center">
      <div className="hidden lg:flex flex-col bg-[#7296AB] p-4 items-center gap-4 rounded-md w-[400px]">
          <div className="flex text-black font-medium text-2xl">
              <p className="text-white ">Luminae</p>
              <p className="text-[#D1E2EB]">Store</p>
          </div>
          <p className="text-white text-xs">
              Register your email not to miss the last minutes off+ Free delivery
          </p>
          <div className="flex bg-white items-center px-2 rounded-sm ">
              <input className="text-xs p-1.5 outline-none" placeholder="Enter your email"/>
              <img className="h-3" src={Img.send}/>
          </div>
      </div>
    </div>
  )
}
