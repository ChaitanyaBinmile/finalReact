import { FormControlLabel, Radio } from '@mui/material'
import React from 'react'

export const ShipmentComponent:React.FC<{ name: string[]}> = ({name})=> {


  const [shipmentName, shipmentImage] = name; 
  return(
    <div className='flex flex-col rounded bg-[#E9E9E9] p-3'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <FormControlLabel value={shipmentName} label='' control={<Radio />} />
                <p className='text-sm font-semibold'>{shipmentName}</p>

            </div>
       
            <img className='h-[18px]' src={shipmentImage} alt="" />
        </div>
        <div className='flex flex-col'>
          <p className='text-xs font-light p-[6.6px]'>
              Delivery time: 14-21 days
          </p>
          <p className='text-xs font-light p-[6.6px]'>
              Shipping Cost: free
          </p>
          <div className='flex items-center'>
            <p className='text-xs font-light p-[6.6px]'>
                Insurance: 
            </p>
            <p className='text-[red] text-xs font-light'>Unavailable</p>
          </div>
        </div>
    </div>
  )
}
