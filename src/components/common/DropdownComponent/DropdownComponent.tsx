import { Img } from "../../HeaderNavigation"
import { DropdownListComponent } from "./DropdownListComponent/DropdownListComponent"

export const DropdownComponent = () => {
  return (
    <div className="hidden py-10 pr-16 pl-1 xl:flex" >
        <div className="flex w-[1600] h-auto flex-wrap justify-around dropdown-menu ">
            <DropdownListComponent title='SHOE & BAG' arr={['Casual Shoes','Boots','Sandals','Slippers']}/>
            <DropdownListComponent title='HOME TEXTILE' arr={['Bedding','Pillows','Handkerchief Towels','Curtain']}/>
            <DropdownListComponent title='PARTY SUPPLIES' arr={['Event & Party','Christmas','Artificial Decorations','Wedding']}/>
            <DropdownListComponent title='LUXURY & DESIGNER' arr={['Towels','Bathroom Scales','Bath Mats','Shower Caps']}/>
            <DropdownListComponent title='COSMETICS' arr={['Shampoo and Conditioner','Styling Products','Hair Accessories','Men\'s Grooming']}/>
            <DropdownListComponent title='SPORT AND OUTDOORS' arr={['Team Sports','Water Sports','Outdoor Recreation','Fitness Equipment']}/>
        </div>
        <div className="flex justify-between gap-2 ">
        <DropdownListComponent title='CLOTHES' arr={['Bottoms','Women\'s Clothig','T-Shirts and Tops','Dresses','Outwear','Formal Wear','Casual Wear','Seasonal Collections','Sports Bras','Workout Tops','Fall Wardrobe']}/>
            <img className="hidden w-[350px] h-[260px] transition-all xl:block "  src={Img.image}/>
        </div>
        <div>

        </div>


    </div>
  )
}
