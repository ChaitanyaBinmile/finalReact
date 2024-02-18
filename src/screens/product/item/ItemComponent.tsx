import { useParams } from 'react-router-dom'
import { DetailComponent } from './detail/DetailComponent'
import { useAppSelector } from '../../../app/hooks'
import { useState } from 'react'

export const ItemComponent = () => {

  const params = useParams()
  const userId = params.id
  const Item = useAppSelector(state=> state.cartArray.Arr.find((item)=>item.id === userId));

  const [img,setImg] = useState(Item?.image)
   
  const setImage = (image:string) =>{
    setImg(image)
  }
  return (
    <div className="flex rounded-md items-center py-4 flex-wrap justify-around w-[100%] max-w-[1400px]">
          <div className="flex flex-wrap items-center">

          <div className="hidden xl:flex flex-col rounded-md mr-1 gap-[4px]">
            {
              Item?.smallImg.map((i)=><img className='rounded-l-md h-[132px] cursor-pointer w-[123px] object-cover object-top' onClick={()=>setImage(i)} src={i} alt="" />)
            }
          </div>
          <div className="flex flex-col gap-2">
          <img className='w-[507px] h-[672.5px] max-w-[507px] object-cover object-top' src={img} alt="" />
          <div className="flex max-w-[500px] overflow-scroll sm:flex xl:hidden rounded-md mr-1 gap-1 ">
          {
              Item?.smallImg.map((i)=><img className='rounded-l-md w-[98px] cursor-pointer object-cover object-top' onClick={()=>setImage(i)} src={i} alt="" />)
            }
          </div>
          </div>
          </div>
          <DetailComponent/>
        </div>
  )
}
