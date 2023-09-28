import { RouteType } from "./type";
import { HomeScreen } from "../screens/home/HomeScreen";
import { ErrorScreen } from "../screens/ErrorScreen/ErrorScreen";
import { WomenScreen } from "../screens/women/WomenScreen";
import { ProductScreen } from "../screens/product/ProductScreen";
import { CheckoutScreen } from "../screens/checkout/CheckoutScreen";

export const RouterPath:RouteType={
    Home:{
        path: '/',
        Component: HomeScreen
    },
    Nomatch:{
        path:'*',
        Component: ErrorScreen
    },
    Women:{
        path:'/women',
        Component: WomenScreen
    },
    Product:{
        path:'/product',
        Component: ProductScreen
    },
    Checkout:{
        path:'/checkout',
        Component: CheckoutScreen
    }
    
};