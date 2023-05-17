import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pagess/Home/Home/Home";
import Login from "../Pagess/Login/Login";
import SignUp from "../Pagess/Login/SignUp";
import CheckOut from "../Pagess/CheckOut/CheckOut";
import Bookings from "../Pagess/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'checkout/:id',
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>

        }
      ]
    },
  ]);
  export default router;