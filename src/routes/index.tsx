import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import { useUserStore } from "../store/userStore";
import ProtectedRouter from "./ProtectedRouter";

export const routerURL = {
  login: "login",
  home: "/",
};

const Routes = () => {
  const infoAuth = useUserStore((state) => state.info);
  const isAuthenticated = async () => {
    if (infoAuth.username) throw redirect("/");
    return null;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<ProtectedRouter />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          path={routerURL.login}
          element={<Login />}
          loader={async () => await isAuthenticated()}
        />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
