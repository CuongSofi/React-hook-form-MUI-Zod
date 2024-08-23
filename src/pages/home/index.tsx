import { Button } from "@mui/material";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { routerURL } from "../../routes";
import { KeyLocalStorage } from "../../constants/keyLocal";

const Home = () => {
  //! state
  const infoAuth = useUserStore((state) => state.info);
  const saveAuth = useUserStore((state) => state.updateInfo);

  const navigate = useNavigate();
  //! function
  const handleLogout = () => {
    window.localStorage.removeItem(KeyLocalStorage.info);
    saveAuth({ username: "", password: "" });
    navigate(routerURL.login);
  };
  //! render
  console.log("hee", infoAuth);
  return (
    <div>
      Halo {infoAuth.username}
      <Button
        variant="outlined"
        onClick={() => {
          navigate(routerURL.login);
        }}
      >
        back to Login
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
