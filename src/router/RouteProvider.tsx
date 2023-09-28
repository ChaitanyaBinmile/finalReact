import { Route,Routes } from "react-router-dom";
import { RouterPath } from "./RouterPath";

export const RouteProvider = () => {
  return (
    <div>
        <Routes>
            <Route {...RouterPath.Home}></Route>
            <Route {...RouterPath.Women}></Route>
            <Route {...RouterPath.Product}></Route>
            <Route {...RouterPath.Checkout}></Route>
            <Route {...RouterPath.Nomatch}></Route>
            
        </Routes>
    </div>
  )
}
