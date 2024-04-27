import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import LakeOHomes from "../Pages/LakeOconeeHomes/LakeOHomes";
import AllFeaturedHomes from "../Components/AllFeaturedHomes/AllFeaturedHomes";
import DetailedHomeInfo from "../Pages/DetailedHomeInfo/DetailedHomeInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element:<DetailedHomeInfo></DetailedHomeInfo>,
        loader:({params}) => fetch(`https://lake-front-estates-server.vercel.app/home/${params.id}`)
      }
    ],
  },
]);
