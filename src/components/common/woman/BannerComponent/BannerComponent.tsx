import { Img } from '../../../../assets/icons'

export const BannerComponent = () => {
  return (
    <div className='relative hidden text-white w-[100%] lg:flex'>
        <img src={Img.banner} alt="" />
        
        <div className='relative flex flex-col bg-[#7299ec] w-[100%] justify-center items-center gap-7'>
        <div className='absolute hidden flex-col xl:flex left-[-90px]'>
                <div className='bg-white  items-center justify-center p-6 text-center font-medium'>
                    <p className='text-black'>Summer Essentials</p>
                    <p className='text-red-600'> 20% off</p>
                </div>
                <div className='bg-[#2e2828] p-2 text-center'>
                    <p>
                        19Jul-30Jul
                    </p>
                </div>
        </div>
            <h1 className='text-4xl text-center'>KIMONOS, CAFTONS & PAREOS</h1>
            <h1 className='text-2xl text-center'>Poolside glam included From $4.99</h1>
            <button className='flex gap-2 bg-[#3a69ce] py-3 px-10 rounded-md items-center'>
                <Img.icon/>
                <button className='text-sm' >SHOP NOW</button>
            </button>
            
        </div>
    </div>
  )
}
