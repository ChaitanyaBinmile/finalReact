import { CardComponent } from './CardCoponent.tsx/CardComponent'

export const TrendingcardComponent = () => {
  return (
    <div className='flex justify-center items-center flex-col' >
        <h1 className='p-12 text-xl font-medium self-start'>Trending must-haves</h1>
        <div className='flex flex-col lg:flex-row justify-around w-[100%] items-center gap-4'>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>

        </div>
    </div>
  )
}
