import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Button, Checkbox } from '@mui/material'
import { CircleComponent } from '../../../women/Navbar/CircleComponent.tsx/CircleComponent'
import { useState } from 'react'
import { Img } from '../../../../assets/icons'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { addCart, setFav } from '../../../../app/feature/cartSlice/cartSlice'
import { Link, useParams } from 'react-router-dom'

const Size=['XS','S','M','L','XL']

export const DetailComponent = () => {
  const params = useParams()
  const userId = params.id
   
  const Item = useAppSelector(state=> state.cartArray.Arr.find((item)=>item.id === userId));
  const {id,incart,price,like} = Item!
  const dispatch = useAppDispatch();

  const toggleCart = () => {
    dispatch(addCart(id));

    };
  const toggleLike = () => {
    dispatch(setFav(id));
    };

    const [total,setTotal] = useState(1)

    function increment(){
     setTotal(total+1)
    }
    function decrement(){
     if (total>1){
        setTotal(total-1)
     }
    }

  return (
    <div className="flex flex-col gap-6 py-14 w-[90%] max-w-[500px]">
            <div className="flex flex-col justify-between">
            <div className="flex gap-2 justify-between">
              <p className="flex font-medium text-2xl"> SHORT PRINTED DRESS</p>
                <div className="border-[1px] rounded-full">
              <Checkbox 
              checked={like}
              icon={<FavoriteBorder/>}
               checkedIcon={<Favorite/>}
               onClick={toggleLike}
              color="error"/>
            </div>
              </div>
              <p className="flex font-medium text-xl">${price}</p>
            
            </div>
            <div className="flex flex-col gap-2">

            <div className="flex gap-16 ">
              <p className="font-medium"> Size</p>
              <div className="flex flex-wrap gap-3">
                {
                    Size.map((items)=>
                    <div className='flex gap-2 items-center justify-center w-[50px] border-[1px] border-[#dbdada] rounded-md py-[3px] hover:bg-[#d8d3d3]'>
                        <p className="flex items-center text-sm">{items}</p>
                    </div>
                    )
                }
                </div>
            </div>
            <p className="text-xs font-medium text-[#FF7A00]">Size guideline</p>
            </div>
            
            <div  className="flex gap-16">
              <p className="font-medium"> Color</p>
              <div className="flex">
                  <CircleComponent color='#551a08'/>
                  <CircleComponent color='#119718'/>
                  <CircleComponent color='#66A5FF'/>
                  <CircleComponent color='#cf4109'/>
              </div>
            </div>
            <div className="flex gap-16"> 
              <p className="font-medium"> Shipping</p>
              <div>
                <div className="flex items-center relative">
                <p className="text-xs font-medium  ">Free Shipping to Victoria teritory </p>
                <p className="text-lg p-0 self-start absolute top-[-12px] right-[-20px]">⌄</p>
                </div>
                <p className="text-xs font-medium text-[grey]">Delivery Time:14-17 days</p>
              </div>

            </div>
            <div className="flex justify-between items-center ">
              <p className="font-medium"> Quantity</p>
              <div className="flex justify-around px-2 gap-4 items-center border-[1px] h-10 rounded-md border-[#b1b1b1]">
                <p className="text-[grey] text-2xl cursor-pointer" onClick={decrement}>-</p>
                <p> {total}</p>
                <p className="text-[grey] text-2xl cursor-pointer" onClick={increment}>+</p>
              </div>
              <p className="text-sm "> 50 avilable/104 sold</p>

            </div>
            <div className="flex flex-col p-4 gap-2 bg-[#e7e7e7] rounded-md">
              <p  className="font-medium text-lg">$79.98</p>
              <div className="w-[98%] border-[0.5px] border-[#b1b1b1]"/>
              <div className="flex gap-2 place-items-center">
                <img src={Img.plus} alt="" />
                <p className="text-xs text-[#535252]">Add shipping insurance for $9( declared value  only if the package gets lost, stolen or damaged.)</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 flex-wrap">
              <Link to='/checkout'>
                <Button variant="contained" style={{ width: '230px',height:'57px' }}>shop now</Button>
              </Link>
              <Button variant="outlined" color='inherit' style={{ width: '240px',height:'57px'  }} onClick={toggleCart}>{incart?'Remove':'Add to cart'} </Button>
            </div>
          </div>
  )
}
