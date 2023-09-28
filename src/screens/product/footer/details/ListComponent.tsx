export const ListComponent  = ({ title, arr }: { title: string; arr:string[] }) => {
  return (
  
    <div className="flex flex-col gap-2 ">
      <h1 className="text-[#262626] font-medium hover:font-semibold">{title}</h1>
      <ul className='flex flex-col gap-3 w-[100%]'>
        {
            arr.map((items)=>(
                <li className="text-[#555555] text-sm hover:font-medium">{items}</li>
            ))
        }
      </ul>
 

    </div>
  )
}
