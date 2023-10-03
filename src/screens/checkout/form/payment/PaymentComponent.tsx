import { Img } from "../../../../assets/icons"
import { RetailerComponent } from "./ratailer/RetailerComponent"
import { ShipmentComponent } from "./ratailer/ShipmentComponent"

export const PaymentComponent = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
        <div className='flex flex-col gap-9'>
            <div>
                <h1 className='font-semibold'>Payment</h1>
                <p className='text-[9px] font-[200]'>Please choose a payment method</p>
            </div>
            <div className="flex flex-col gap-6">

            <RetailerComponent name='Paypal' image={Img.paypal}/>
            <RetailerComponent name='Mastercard' image={Img.mastercard}/>
            <RetailerComponent name='Bitcoin' image={Img.bitcoin}/>
            </div>

        </div>
        <div className='flex flex-col gap-6'>
            <div>
                <h1 className='font-semibold'>Shipping</h1>
                <p className='text-[9px] font-[200]'>Please choose a shipping company based on your region.</p>
            </div>
            <ShipmentComponent name='AUSFF' image={Img.ship1}/>
            <ShipmentComponent name='Racecouriers' image={Img.ship2}/>
            <ShipmentComponent name='TranscoCargo' image={Img.ship3}/>

        </div>
    </div>
  )
}
