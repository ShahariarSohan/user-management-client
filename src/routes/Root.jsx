import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
    ],
  },
]);

export default router;
