import { NavLink } from "react-router-dom"
import { CardComponent } from "./CardComponent/CardComponent"


export const TopcardComponent = () => {
  return (
    <div>
        <h1 className='p-12 text-xl font-medium'>Flash Sales</h1>
          <div className="flex p-12 overflow-scroll gap-4">
              <NavLink to='/women'>
                <CardComponent/>
              </NavLink>
          </div>
    </div>
  )
}
