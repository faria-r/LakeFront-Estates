import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import TestPage from "../Pages/TestPage/TestPage";

export const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<TestPage></TestPage>
        }
    ]
}])