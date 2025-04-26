import { createBrowserRouter } from "react-router-dom";
import AddCoffees from "../pages/AddCoffees";
import Coffees from "../pages/Coffees";
import Error from "../pages/Error";
import Main from "../layouts/Main";
import Coffee from "../components/Coffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import PersonalCoffees from "../pages/PersonalCoffees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Coffees></Coffees>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/addCoffees",
        element: (
          <PrivateRoute>
            <AddCoffees></AddCoffees>
          </PrivateRoute>
        ),
      },
      {
        path: "/coffees/:id",
        element: (
          <PrivateRoute>
            <Coffee></Coffee>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/coffees/update/:id",
        element: (
          <PrivateRoute>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/personalCoffees",
        element: (
          <PrivateRoute>
            <PersonalCoffees></PersonalCoffees>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
