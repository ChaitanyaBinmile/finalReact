import { Img } from '../../HeaderNavigation'
import { ArrayComponent } from './ArrayComponent'
import { FootersearchComponent } from './Footersearch/FootersearchComponent'

export const FooterComponent = () => {
  return (
    <div className='flex flex-col mt-14'>
          <div className='flex w-[100%] justify-center bg-[#D1E2EB] relative'>
          <FootersearchComponent/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-around gap-x-[30px]   pb-4 mt-24 gap-4'>

          <ArrayComponent title='Company' arr={['About Us','Our Store','Contact Us']}/>
          <ArrayComponent title='Career Opportunities' arr={['Selling Programs','Advertise','Cooperation']}/>
          <ArrayComponent title='How to Buy' arr={['Making Payments','Delivery Options','Buyer Protection','New User Guide']}/>
          <ArrayComponent title='Help' arr={['Contact Us','FAQ','Privacy Policy']}/>
          </div>
      </div>
      <div className='flex flex-col py-6 px-20 gap-3'>
        <div className='flex items-center justify-between '>
          <img src={Img.payment} alt="" />
          <div className=' items-center hidden lg:flex  relative'>
            <p className='text-xs'>English </p>
            <p className='hidden lg:flex absolute top-[-8px] left-10  h-4 self-start items-start '>⌄</p>
          </div>
        </div>
        <div className='h-0.5 w-[102%] hidden lg:flex bg-[#D9D9D9]'></div>
        <div className=' mt-6 justify-between hidden lg:flex '>
          <p className='text-xs font-light'>165-179 Forster Road City of Monash, Melbourne, Australia</p>
          <p className='text-xs font-light text-[#8b8a8a]'>©2023 Copyright in reserved for lumine shop</p>
          <img src={Img.media}/>
        </div>
      </div>
    </div>
  )
}
