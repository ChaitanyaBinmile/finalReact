import { Img } from "../index"

export const AddvertiseComponent = () => {
  return (
    <div className="hidden items-center gap-4 lg:flex">
        <img src={Img.cosmetic}/>
        <div>
        <h1 className="text-sm"> Weekly Men's Toiiletries Coupons.</h1>
        <h1 className="text-sm text-[#C4C4C4]"> We extend exclusive discounts to our male clientele</h1>
        </div>
    </div>
  )
}
