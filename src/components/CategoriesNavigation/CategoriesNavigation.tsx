import { Link } from "react-router-dom"
import { DropdownComponent } from "../common/DropdownComponent/DropdownComponent"

const arr = ['Woman','Man','Mother-Child','Home&Furniture','Super market','Cosmetics','Shoe & Bag','Electronic','Sport & Outdoor','Best seller']

export const CategoriesNavigation = () => {
  return (
    <ul className="hidden text-sm p-[18px] justify-around md:flex overflow-visible w-[100%]">
      {arr.map((item) => (
        <div key={item}>
          <Link to='/women' >
          <li className="group relative dropdown text-black hover:text-slate-800 cursor-pointer">
            <a>{item}</a>
            {  item === 'Sport & Outdoor' || item === 'Best seller'|| item ===  'Electronic' ? (
              
                <div className="dropdown-menu absolute z-20 w-[960px] top-5 right-2 hidden transition-opacity duration-200 group-hover:flex group-hover:right-2">
                  <ul className="flex max-w-[700px] xl:max-w-[960px] bg-white shadow z-10 flex-wrap rounded-md justify-between">
                    <DropdownComponent />
                  </ul>
                </div>
             
            ) :item === 'Cosmetics' || item === 'Shoe & Bag'  ? (
              
              <div className="dropdown-menu absolute z-20 w-[960px] top-5 left-[-450px] hidden transition-opacity duration-200 group-hover:flex group-hover:right-2">
                <ul className="flex max-w-[700px] xl:max-w-[960px] bg-white shadow z-10 flex-wrap rounded-md justify-between">
                  <DropdownComponent />
                </ul>
              </div>
           
          ) :item === 'Super market' ? (
              
            <div className="dropdown-menu absolute z-20 w-[960px] top-5 left-[-180px] hidden transition-opacity duration-200 group-hover:flex group-hover:right-2">
              <ul className="flex max-w-[700px] xl:max-w-[960px] bg-white shadow z-10 flex-wrap rounded-md justify-between">
                <DropdownComponent />
              </ul>
            </div>
         
        ) :

             <div className="dropdown-menu absolute z-20 w-[960px] top-5 hidden transition-opacity duration-200 group-hover:flex">
            <ul className="flex max-w-[700px] xl:max-w-[960px] bg-white shadow z-10 flex-wrap rounded-md justify-between">
              <DropdownComponent />
            </ul>
          </div>}
          </li>
          </Link>
        </div>
      ))}
    </ul>
  )
}
