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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/coffees/:email",
        element: (
          <PrivateRoute>
            <Coffees></Coffees>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.email}`),
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
        path: "/coffee/:id",
        element: (
          <PrivateRoute>
            <Coffee></Coffee>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/coffees/update/:id",
        element: (
          <PrivateRoute>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
