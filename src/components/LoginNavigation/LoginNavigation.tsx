import { FavComponents } from "./FavComponent/FavComponents"
import { Img,CartsComponent,AddvertiseComponent } from "./index"

const arrMenu=['USD','English']

export const LoginNavigation = () => {
  return (
    <div className='hidden h-[60px] w-[100%] bg-[#262626] items-center text-white justify-around sm:flex'>
        <div className="flex gap-2 items-center">
            <Img.categories/>
            <h1 className="font-medium text-xl"> Categories</h1>
        </div>
        <ul className="flex gap-8 text-sm items-center">
            {
                arrMenu.map((item)=>
                <li className="flex items-center gap-1">
                    <h3>{item}</h3>
                    <img src={Img.arrowWhite}/>
                </li>
                )}

        </ul>
        <div className="hidden w-[00.5px] h-12  bg-[#7B7B7B] lg:flex"/>
        <AddvertiseComponent/>
        <div className="hidden w-[00.5px] h-12  bg-[#7B7B7B] lg:flex"/>
        <div className="hidden gap-10 text-sm md:flex">
            
              <li className="flex gap-1 items-center">
                <Img.signin/>
                <p>Sign in</p>
              </li>
              <FavComponents/>
            
          <CartsComponent color={'light'}/>
        </div>
    </div>
  )
}
