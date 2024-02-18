export const ArrayComponent = ({ title, arr }: { title: string; arr:string[] }) => {
  return (
    <div className="flex flex-col gap-4 w-[180px]">
      <h1 className="text-[#262626] font-medium hover:font-semibold">{title}</h1>
      <ul className="flex flex-col gap-1">
        {
            arr.map((items)=>(
                <li className="text-[#555555] text-sm w-[150px] hover:font-medium">{items}</li>
            ))
        }
      </ul>
    </div>
  );
};
