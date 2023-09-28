import { Img } from "../../../assets/icons";
import Checkbox from '@mui/material/Checkbox';
import { CircleComponent } from "./CircleComponent.tsx/CircleComponent";
import { Slider } from "@mui/material";
import {  useState } from "react";

const arr=[
    {name:'Short',
    value:60
  },{
    name:'Mid-length',
    value:10
  },{
    name:'Sweater',
    value:56
  },{
    name:'Party Dresses',
    value:80
  },{
    name:'Regular Fit',
    value:100
  }]
  const Arr =['Casual','Business casual','Bohemian','Minimalist','Uniqlo','Zara','Gucci','Mango','Ralph Lauren','Calvin Klein']
  const Size=['2XS','XS','S','M','L','XL','2XL','3XL']
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  

  export const NavbarComponent: React.FC<{ display: string }> = ({ display }) => {
    

    const [range, setRange] = useState<number[]>([60, 450]);

  const handleChange = (_event: Event, newRange:  number[]) => {
    if (Array.isArray(newRange)) {
      setRange(newRange);
    }

  };
    return (
        <div className={(display==='False'?' hidden sm:flex ':' flex sm:hidden ')+'w-[290px] px-4 flex-col text-black py-[68px] gap-8 ' } >
                <div className='flex items-center gap-4'>
                    <img src={Img.vector}/>
                    <p className='text-sm font-medium'>All Categories</p>
                </div>
                <p className='text-sm self-start font-medium  '>BRAND</p>
                <div className='flex items-center border-[1px] w-max overflow-hidden border-[#dbdada] rounded-md'>
                    <input className='text-xs py-1 px-3 outline-none' placeholder='Search'/>
                    <img className='h-4 pr-1' src={Img.Search}/>
                </div>
                <div className='h-[1px] w-[100%] bg-[#e0dede]'></div>
                <p className='text-sm self-start font-medium  '>MODEL</p>
                <div className='flex justify-between  flex-col gap-4'>
                    {arr.map((items)=> <div className='flex justify-between'><p className='text-xs text-[#636161]'>{items.name}</p>
                    <p className='text-xs text-[#9e9c9c] font-light'>{items.value}</p></div>)}
                </div>
                <div className='h-[1px] w-[115%] bg-[#e0dede]'></div>

                <p className='text-sm self-start font-medium  '>STYLE</p>
                <div className='flex flex-col'>
                    {
                        Arr.map((items)=><div className='flex gap-4 items-center'>
                            <Checkbox {...label}  />
                            <p  className='text-xs text-[#636161]'>{items}</p>
                        </div>)
                    }
                </div>
                <div className='h-[1px] w-[115%] bg-[#e0dede]'></div>

                <p className='text-sm self-start font-medium  '>COLOR</p>   
                <div className="flex flex-wrap">
                    <CircleComponent color='red'/>
                    <CircleComponent color='#F7DDD0'/>
                    <CircleComponent color='#66A5FF'/>
                    <CircleComponent color='#FF9D41'/>
                    <CircleComponent color='#FFD36C'/>
                    <CircleComponent color='#4BCB88'/>
                    <CircleComponent color='#9747FF'/>
                    <CircleComponent color='#FF67DE'/>
                    <CircleComponent color='#967C62'/>
                    <CircleComponent color='#434343'/>
                    <CircleComponent color='#BCBFC2'/>
                    <CircleComponent color='#eceaea'/>
                </div>
                <div className='h-[1px] w-[115%] bg-[#e0dede]'></div>
                <p className='text-sm self-start font-medium  '>SIZE</p>
                <div className="flex flex-wrap gap-1">
                {
                    Size.map((items)=>
                    <div className='flex items-center justify-center w-[50px] border-[1px] border-[#dbdada] rounded-md py-[3px] hover:bg-[#d8d3d3]'>
                        <p className="flex items-center text-sm">{items}</p>
                    </div>
                    )
                }
                </div>
                <div className='h-[1px] w-[115%] bg-[#e0dede]'></div>
                <p className='text-sm self-start font-medium  '>PRICE</p>
                <div className="flex items-center gap-3">
                        <div className='flex items-center justify-center w-[87px] border-[1px] border-[#dbdada] rounded-md h-[40px]'>
                            <p className="flex items-center font-light text-[15px] text-[#383737]">{range[0]}</p>
                        </div>
                        <div className="w-[14px] h-[2px] bg-[#c0bfbf]"></div>
                        <div className='flex items-center justify-center w-[87px] border-[1px] border-[#dbdada] rounded-md h-[40px]'>
                            <p className="flex items-center font-light text-[15px] text-[#383737]">{range[1]}</p>
                        </div>
                </div>
                <Slider
                    size="medium"
                    value={range}
                    aria-label="Small"
                    valueLabelDisplay="on"
                    max={500}
                    min={0}
                    onChange={handleChange as (event: Event, newValue: number | number[]) => void} 
                    />
                <p className="text-[#6e6e6e] text-sm">878 products found</p>

            </div>
  )
}
