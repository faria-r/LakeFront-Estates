import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import LakeOHomes from "../Pages/LakeOconeeHomes/LakeOHomes";
import AllFeaturedHomes from "../Components/AllFeaturedHomes/AllFeaturedHomes";
import DetailedHomeInfo from "../Pages/DetailedHomeInfo/DetailedHomeInfo";
import Login from "../Shared/Login/Login";
import SignUP from "../Shared/SIgnUP/SignUP";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DisplayError from "../Pages/DisplayError/DisplayError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/featuredHomes",
        element:<AllFeaturedHomes></AllFeaturedHomes>,
      },

      {
        path: "/homes/:name",
        element: <LakeOHomes></LakeOHomes>,
        loader: ({ params }) =>
          fetch(`https://lake-front-estates-server.vercel.app/homes/${params.name}`),
      },
      {
        path:'/home/:id',
        element:<PrivateRoute><DetailedHomeInfo></DetailedHomeInfo></PrivateRoute>,
        loader:({params}) => fetch(`https://lake-front-estates-server.vercel.app/home/${params.id}`)
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUP></SignUP>,
  },
  {
    path:'*',
    element:<Error></Error>,
    errorElement:<DisplayError></DisplayError>
      }
]);
