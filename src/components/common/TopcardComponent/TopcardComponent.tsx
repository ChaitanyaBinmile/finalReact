import { NavLink } from "react-router-dom"
import { CardComponent } from "./CardComponent/CardComponent"


export const TopcardComponent = () => {
  return (
    <div>
        <h1 className='p-12 text-xl font-medium'>Flash Sales</h1>
       
          <div className="p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-around flex-wrap gap-4">
            <NavLink to='/women'>
              <CardComponent/>
            </NavLink>
            <NavLink to='/women'>
              <CardComponent/>
            </NavLink>
            <NavLink to='/women'>
              <CardComponent/>
            </NavLink>
            <NavLink to='/women'>
              <CardComponent/>
            </NavLink>
          </div>
    </div>
  )
}
