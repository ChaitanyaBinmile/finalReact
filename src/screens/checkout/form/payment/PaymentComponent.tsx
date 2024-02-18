import { RadioGroup } from "@mui/material"
import { Img } from "../../../../assets/icons"
import { RetailerComponent } from "./ratailer/RetailerComponent"
import { ShipmentComponent } from "./ratailer/ShipmentComponent"
import { useDispatch} from "react-redux"
import { addPayment, addShipment } from "../../../../app/feature/customerSlice/customerSlice"

export const PaymentComponent = () => {
    const dispatch = useDispatch()
    const setPayment =(paymentname:string)=>{

    dispatch(addPayment(paymentname))
}
const setShipment =(name:string)=>{

    dispatch(addShipment(name))
}

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
        <div className='flex flex-col gap-6'>
            <div>
                <h1 className='font-semibold'>Payment</h1>
                <p className='text-[9px] font-[200]'>Please choose a payment method</p>
            </div>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Paypal"
                name="radio-buttons-group"
                style={{ display: 'flex', flexDirection: 'column', gap:'12px'}}
                onChange={(event) => {
                    const selectedValue = event.target.name;
                    setPayment(selectedValue);
                  }}
            >
                <RetailerComponent name={['Paypal',Img.paypal]}/>
                <RetailerComponent name={['Mastercard',Img.mastercard]} />
                <RetailerComponent name={['Bitcoin',Img.bitcoin]} />
            </RadioGroup>
        </div>
        <div className='flex flex-col gap-6'>
            <div>
                <h1 className='font-semibold'>Shipping</h1>
                <p className='text-[9px] font-[200]'>Please choose a shipping company based on your region.</p>
            </div>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="AUSFF"
                name="radio-buttons-group"
                style={{ display: 'flex', flexDirection: 'column', gap:'12px'}}
                onChange={(event) => {
                    const selectedValue = event.target.value;
                    setShipment(selectedValue);
                  }}
            >
                <ShipmentComponent name={['AUSFF',Img.ship1]}/>
                <ShipmentComponent name={['Racecouriers',Img.ship2 ]}/>
                <ShipmentComponent name={['TranscoCargo',Img.ship3]} />

            </RadioGroup>

        </div>
    </div>
  )
}
