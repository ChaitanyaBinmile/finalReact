import { Link } from "react-router-dom";

export const DropdownListComponent = ({ title, arr }: { title: string; arr:string[] }) => {
  return (
    <Link to='/women'>
      <div className="flex flex-col gap-2 w-[150px] dropdown-menu">
        <h1 className="text-[#262626] font-medium hover:font-semibold">{title}</h1>
        <ul>
          {
              arr.map((items)=>(
                  <li className="text-[#555555] text-sm w-[200px] hover:font-medium">{items}</li>
              ))
          }
        </ul>
      </div>
    </Link>
  );
};
