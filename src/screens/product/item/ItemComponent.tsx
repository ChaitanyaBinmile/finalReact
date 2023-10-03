import { useParams } from 'react-router-dom'
import { Img } from '../../../assets/icons'
import { DetailComponent } from './detail/DetailComponent'
import { useAppSelector } from '../../../app/hooks'

export const ItemComponent = () => {

  const params = useParams()
  const userId = params.id
   
  const Item = useAppSelector(state=> state.cartArray.Arr.find((item)=>item.id === userId));

  return (
    <div className="flex rounded-md items-center py-4 flex-wrap justify-around w-[100%] max-w-[1400px]">
          <div className="flex flex-wrap items-center">

          <div className="hidden xl:flex flex-col rounded-md mr-1 ">
            <img className='rounded-tl-md h-[134px] w-[123px]' src={Img.dress1} alt="" />
            <img className='h-[134px] w-[123px]' src={Img.dress2} alt="" />
            <img className='h-[134px] w-[123px]' src={Img.dress3} alt="" />
            <img className='h-[134px] w-[123px]' src={Img.dress4} alt="" />
            <img  className='rounded-bl-md h-[134px] w-[123px]' src={Img.dress5} alt="" />
          </div>
          <div className="flex flex-col gap-2">
          <img className='w-[507px] h-[672.5px] max-w-[507px] object-cover object-top' src={Item?.image} alt="" />
          <div className="hidden sm:flex xl:hidden rounded-md mr-1 ">
            <img className='rounded-tl-md h-[134px] w-[101px]' src={Img.dress1} alt="" />
            <img className='h-[134px] w-[101px]' src={Img.dress2} alt="" />
            <img className='h-[134px] w-[101px]' src={Img.dress3} alt="" />
            <img className='h-[134px] w-[101px]' src={Img.dress4} alt="" />
            <img  className='rounded-bl-md h-[134px] w-[101px]' src={Img.dress5} alt="" />
          </div>
          </div>
          </div>
          <DetailComponent/>
        </div>
  )
}
