import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import AuthRedirect from "./layout/AuthRedirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRedirect />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
