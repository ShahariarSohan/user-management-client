import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Error from "../pages/Error";
import Main from "../layouts/Main";
import Coffee from "../components/Coffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/coffees/:id",
        element: <Coffee></Coffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
    ],
  },
]);

export default router;
