import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";

export const routerURL = {
  login: "/login",
  home: "/",
};
const router = createBrowserRouter([
  {
    path: routerURL.login,
    element: <Login />,
  },
  { path: "*", element: <Home /> },
]);

export default router;
