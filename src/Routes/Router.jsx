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
import DashBoard from "../LayOut/DashBoard/DashBoard";
import DashBoardHomes from "../Pages/DashBoardHomes/DashBoardHomes";
import AllUsers from "../Pages/AllUsers/AllUsers";
import CommonDashboard from "../Pages/CommonDashboard/CommonDashboard";
import FavouritesHomes from "../Pages/FavouritesHomes/FavouritesHomes";
import Contact from "../Pages/Contact/Contact";
import ScheduleLists from "../Pages/scheduleLists/ScheduleLists";
import AdminRoute from "./AdminRoutes/AdminRoute";
import Payment from "../Pages/Payment/Payment";
import Review from "../Components/Review/Review";
import AddHome from "../Pages/AddHome/AddHome";

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
          fetch(`http://localhost:5000/homes/${params.name}`),
      },
      {
        path:'/home/:id',
        element:<PrivateRoute><DetailedHomeInfo></DetailedHomeInfo></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/home/${params.id}`)
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
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    errorElement:<DisplayError></DisplayError>,
    children:[
      {
        path:'/dashboard',
        element:<CommonDashboard></CommonDashboard>
      },
      {
        path:'/dashboard/homes',
        element:<AdminRoute><DashBoardHomes></DashBoardHomes></AdminRoute>
      },
      {
        path:'/dashboard/addHome',
        element:<AdminRoute><AddHome></AddHome></AdminRoute>
      },
      {
        path:'/dashboard/users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'/dashboard/favourites',
        element:<FavouritesHomes></FavouritesHomes>
      },
      {
        path:'/dashboard/schedules',
        element:<AdminRoute><ScheduleLists></ScheduleLists></AdminRoute>
      },
      {
        path:'/dashboard/payment',
        element:<Payment></Payment>
      },
      {
path:'/dashboard/addReview',
element:<Review></Review>
      }
    ]
  },
  {
    path:'*',
    element:<Error></Error>,
    errorElement:<DisplayError></DisplayError>
      }
]);
