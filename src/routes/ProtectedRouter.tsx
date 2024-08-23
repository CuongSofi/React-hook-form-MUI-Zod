import { useUserStore } from "../store/userStore";
import { Navigate, Outlet } from "react-router-dom";
import { routerURL } from ".";

const ProtectedRouter = () => {
  //! state
  const infoAuth = useUserStore((state) => state.info);

  //! function
  //! render

  if (!infoAuth.username) {
    return <Navigate to={routerURL.login} />;
  }

  return <Outlet />;
};

export default ProtectedRouter;
