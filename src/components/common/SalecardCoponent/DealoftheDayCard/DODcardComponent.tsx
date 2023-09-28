import { Img } from "../../../HeaderNavigation"

const arr=[{
    num:' 12',
    dot:':',
    str:'hour'
},{
    num:' 43 ',
    dot:':',
    str:'min'
},{
    num:' 12',
    str:'sec'
}]
export const DODcardComponent = () => {
  return (
    <div className="flex flex-col shadow-xl justify-center items-center w-[400px] rounded-md px-6 py-2 gap-3">
        <h1 className='font-semibold text-[14px] text-[#9D9D9D]'> DEAL OF THE DAY</h1>
        <div className='flex flex-row text-black text'>
                {
                    arr.map((item)=>
                    <div className='flex flex-col '>
                        <div className="flex items-center">
                            <p className="font-medium text-[18px]">
                            {item.num}
                            </p>
                            &nbsp;
                            <p className="text-[#9D9D9D">
                            {item.dot}
                            </p>
                            &nbsp;

                        </div>
                        <p className="text-xs text-[#9D9D9D]">
                        {item.str}
                        </p>
                    </div>)
                }
        </div>
        <img src={Img.bag}/>
        <p className="font-medium text-[18px]">Tonny Black</p>
        <p className="text-xs text-[#9D9D9D]">Shoulder bag-White-Plain</p>
        <img className="object-cover" src={Img.star}/>
        <div className="flex justify-evenly w-[100%] ">
            <p className="text-red-500">
                $69.99
            </p>
            <p>
                <del>
                $129.99

                </del>
            </p>
            <img src={Img.four} className="h-5" alt="" />
        </div>
    </div>
  )
}
