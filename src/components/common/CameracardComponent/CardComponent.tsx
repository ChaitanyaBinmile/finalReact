import { Img } from "../../HeaderNavigation"

export const CardComponent = () => {
  return (
    <div className='flex flex-col shadow-xl '>
        <img src={Img.camera}/>
        <div className='flex flex-col relative p-4 gap-2'>
            <p className='px-2 text-sm'>Zara</p>
            <p className='px-2 text-xs text-[#555]'> Kimono & Caftan-Black-Regular-Fit</p>
            <img className='px-1' src={Img.stars}/>      
            <div className="px-2 flex gap-4 items-center ">
                <p className="text-red-500">
                    $228
                </p>
                <p className='text-[#9D9D9D]'>
                    <del>
                    $290

                    </del>
                </p>
                <p className='text-xs text-[red]'>
                  -10%
                </p>
                
            </div>
        </div>
    </div>

  )
}
