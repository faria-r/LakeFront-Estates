import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import TestPage from "../Pages/TestPage/TestPage";
import LakeOHomes from "../Pages/LakeOconeeHomes/LakeOHomes";

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
        path: "/homes/:name",
        element: <LakeOHomes></LakeOHomes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/homes/${params.name}`),
      },
    ],
  },
]);
