import { PopcardComponent } from './PopcardComponent'

export const Cardrepeat = () => {
  return (
    <div className='flex flex-wrap justify-around md:flex md:flex-nowrap'>
        <PopcardComponent/>
        <PopcardComponent/>
    </div>
  )
}
