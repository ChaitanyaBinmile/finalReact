import { Link } from "react-router-dom"
import { CartsComponent } from "../LoginNavigation"
import { MenuComponent, SearchComponent,Img } from "./index"

export const NavigationComponent = () => {
  return (
    <div className="flex flex-col gap-[20px] xl:flex-row py-7  items-center w-[100%] justify-around ">
        <div className="flex  items-center w-[100%] justify-around">
            <div className="flex flex-col gap-10 md:flex-row md:gap-0 items-center justify-between md:justify-around w-[100%]">
                <div className="flex  items-center w-[95%] justify-center gap-2 sm:gap-6 sm:w-[100%] ">
                    <Link to='/'>

                    <img src={Img.logo} className="h-[33px]"/>
                    </Link>
                    <Link to='/'>
                    <h1 className="font-medium text-[32px]">
                        Luminus
                    </h1>
                    </Link>
                    <div className="flex md:hidden">
                        <CartsComponent color={'dark'}/>
                    </div>
                </div>
                <div className="flex justify-around w-[100%]">
                    
                    <SearchComponent/>
                
                    
                </div>
            </div>
        </div>
        
        <div className="hidden md:flex items-center w-[100%] gap-8 justify-around ">
            <MenuComponent/>
        
            <img src={Img.social}/>
        
        </div>
    </div>
  )
}
