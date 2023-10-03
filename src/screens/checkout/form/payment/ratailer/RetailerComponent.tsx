import { FormControlLabel, Radio } from '@mui/material'
import React from 'react'

export const RetailerComponent:React.FC<{ name: string,image:string}> = ({name,image})=> {
  return (
    <div className='flex flex-col rounded bg-[#E9E9E9] p-3'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <FormControlLabel value={name} name="payment" label='' control={<Radio />} />
                <p className='text-sm font-semibold'>{name}</p>

            </div>
       
            <img className='h-[18px]' src={image} alt="" />
        </div>
        <p className='text-[11px] font-light p-3'>
        PayPal is a trusted online payment platform
         that allows individuals and businesses to securely send and receive money electronically.
        </p>
    </div>
  )
}
