import { DODcardComponent } from "./DealoftheDayCard/DODcardComponent"

export const SalecardComponent = () => {
  return (
    <div>
        <h1 className='p-12 text-xl font-medium'>Flash Sales</h1>
      <div className='flex gap-4 w-[100%]  overflow-hidden overflow-x-scroll'>
        <DODcardComponent/> 
        <DODcardComponent/> 
        <DODcardComponent/> 
        <DODcardComponent/> 
        <DODcardComponent/> 
        
      </div>
    </div>
  )
}
