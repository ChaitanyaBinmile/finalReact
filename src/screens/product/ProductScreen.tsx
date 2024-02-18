import { Link } from "react-router-dom"
import { FooterComponent } from "./footer/FooterComponent"
import { FooterDetailsComponent } from "./footer/details/FooterDetailsComponent"
import { ItemComponent } from "./item/ItemComponent"

const footerArr = ['PRODUCT DETAILS', 'REVIEWS(5)' , 'SHIPPING & PAYMENT']

export const ProductScreen = () => {

  return (
    <div className="flex flex-col flex-wrap items-around gap-12">
        <div className='flex pl-4 py-4'>
              <Link to='/'>
                <p className='flex text-xs text-[#5f5f5f]'> Homepage &gt; </p>
              </Link>
              <Link to='/women'>
                <p className='flex text-xs text-[#5f5f5f]'> Women &gt; Clothes &gt;</p>
              </Link>
            <p className='flex text-xs text-[#5f5f5f] cursor-pointer'>  Zara</p>


        </div>
        <ItemComponent/>
        
          <div className="flex flex-col ml-6 gap-8 my-6 w-[95%]">
            <div className="flex text-sm font-medium justify-between lg:justify-around max-w-[1500px] w-[100%]">
              {
                footerArr.map(items => <div>
                  {items}
                </div>)
              }
            </div>
            <div className="h-[1px] w-[100%] bg-[#d4d4d4] "/>
            <FooterDetailsComponent/>
            <div className="h-[1px] w-[100%] bg-[#d4d4d4]"/>
            <p className="font-medium flex self start">YOU MIGHT ALSO LIKE</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  justify-around items-center w-[100%] mb-12">
              <FooterComponent/>
              <FooterComponent/>
              <FooterComponent/>
              <FooterComponent/>
            </div>
          </div>
    </div>
  )
}
