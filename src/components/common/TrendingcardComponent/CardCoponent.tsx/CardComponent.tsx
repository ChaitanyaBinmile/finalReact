import { Img } from '../../../HeaderNavigation'

export const CardComponent = () => {
  return (
    <div className='w-[95%]'>
      <div className='relative ' >
          <img className='absolute left-3 top-3' src={Img.new}/>
          <img className='rounded-t-md w-[100%]  h-fit' src={Img.trending}/>
      <div className='flex rounded-b-md bg-black p-4 justify-around'>
        <div className='flex flex-col  gap-2'>
          <h1 className='text-white'>Cool & Sexy Calvin Klein</h1>
          <p className="text-xs text-[#9D9D9D]"> Dotted dress-Casual</p>
        </div>
        <button className='text-white border-[1px] border-[#9c9b9b] rounded-md px-6'> 
          <p>$89 Shop Now</p>
        </button>
        </div>
      </div>

    </div>
  )
}
