import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { routerURL } from "../routes";

const LayoutProvider = () => {
  //! state
  const infoAuth = useUserStore((state) => state.info);

  //! function
  if (infoAuth.username) {
    return <Navigate to={routerURL.home} replace />;
  }
  //! render
  return <Outlet />;
};

export default LayoutProvider;
