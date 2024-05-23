import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Createproduct from "./components/Createproduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      children: [
        {
          path: "/",
          element: <Registration />,
        },
        {
          path: "/login",
          element: <Login />,
        },
          {
            path: "/user/dashboard",
            element: <DashBoard  />,
          },
          {
            path: "/create/product",
            element: <Createproduct  />,
          },
      ],
    },
  ]);
  return (
    <>
      <h1>Registration and login </h1>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
