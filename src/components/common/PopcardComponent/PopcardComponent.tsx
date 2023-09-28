import { Img } from '../../HeaderNavigation'

export const PopcardComponent = () => {
  return (
    <div className='flex my-10'>
        <div className='flex  flex-col bg-[#c02a36] text-white gap-5 px-2 md:px-6 py-12 min-w-[130px] justify-center h-[60vw] md:h-[30vw]'>
            <p className='font-medium text-2xl'>Never-Ending Summer</p>
            <p className='font-normal text-md'>Throwback Shirts & all-day dressed</p>
            <p className='underline text-xs'>Explore all categories</p>

        </div>
        <img className='h-[60vw] md:h-[30vw]' src={Img.red}/>
    </div>
  )
}
