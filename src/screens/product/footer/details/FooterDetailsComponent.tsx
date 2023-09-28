import { Img } from "../../../../assets/icons"
import { ListComponent } from "./ListComponent"

export const FooterDetailsComponent = () => {
  return (
    <div className="flex justify-between px-6 flex-wrap w-[100%] max-w-[1200px]">
        <div className="flex flex-col justify-between max-w-[450px] min-w-[250px] ">
            <ListComponent title="Product Description" arr={['Short dress with a plunging V-neckline and tie detail. Wide sleeves falling below the elbow. Contrast bead details. Invisible back zip fastening.'] }/>
            <ListComponent title='Product Description' arr={['Length | Regular','Pattern | Floral','Size | 38','Fit | Regular fit','Age group | Adult','Leg opening | Wide leg','Sleeve length | Long sleeve','Package contents | 2pcs']}/>
            
        </div>
        <div className="flex flex-col gap-4 max-w-[450px] min-w-[250px]">
            <ListComponent title="Composition" arr={['We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans OUTER SHELL ','90% cotton 10% linen'] }/>
            <div className="flex flex-col gap-2 ">
      <h1 className="text-[#262626] font-medium hover:font-semibold">Care instructions</h1>
      <ul className='flex flex-col gap-3 w-[100%]'>
        <li className="flex gap-2 text-[#555555] text-sm hover:font-medium">
            <img src={Img.care1}/>
          <p>
            Machine wash at max. 30ºC/86ºF with short spin cycle
            </p></li>
            <li className="flex gap-2 text-[#555555] text-sm hover:font-medium">
            <img src={Img.care2}/>
            <p>Iron at a maximum of 110ºC/230ºF</p></li>
            <li className="flex gap-2 text-[#555555] text-sm hover:font-medium">
            <img src={Img.care3}/>
            <p>
              Do not dry clean
            </p></li>
            <li className="flex gap-2 text-[#555555] text-sm hover:font-medium">
            <img src={Img.care4}/>
            <p>Do not tumble dry</p></li>
            <li className="flex gap-2 text-[#555555] text-sm hover:font-medium">
            <img src={Img.care5}/>
            <p>Wash inside out</p></li>
            <li className="flex gap-2 text-[#555555] text-sm hover:font-medium">
            <img src={Img.care6}/>
            <p>Wash separately</p></li>

                   </ul>


    </div>

        </div>

    </div>
  )
}
