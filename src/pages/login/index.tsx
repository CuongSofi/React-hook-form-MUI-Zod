import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CommonStyles from "../../components";
import { ILogin } from "../../modules/auth/interfaces/auth.interface";
import loginSchema from "../../schemas/auth/loginSchema";
import { Navigate, useNavigate } from "react-router-dom";
import { routerURL } from "../../routes";
import { useUserStore } from "../../store/userStore";
import { KeyLocalStorage } from "../../constants/keyLocal";
import httpService from "../../service/httpService";

const initialValues: ILogin = {
  username: "",
  password: "",
};

const Login = () => {
  //! state
  const saveAuth = useUserStore((state) => state.updateInfo);

  const navigate = useNavigate();
  const methods = useForm<ILogin>({
    defaultValues: initialValues,
    resolver: zodResolver(loginSchema),
  });
  const { handleSubmit } = methods;
  //! function
  const onSubmit: SubmitHandler<ILogin> = (values) => {
    if (values.username === "admin" && values.password === "admin") {
      saveAuth({ username: values.username, password: values.password });
      httpService.saveInfoLocal(values);
      navigate(routerURL.home);
    }
  };

  //! render
  return (
    <div className="mx-auto w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[500px]">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <CommonStyles.FormFieldUI
            name="username"
            component={({ field, fieldState }) => (
              <CommonStyles.TextFieldForm
                variant="outlined"
                fullWidth
                label="Username*"
                field={field}
                fieldState={fieldState}
                {...field}
              />
            )}
          />

          <CommonStyles.FormFieldUI
            name="password"
            component={({ field, fieldState }) => (
              <CommonStyles.TextFieldForm
                label="Password*"
                fullWidth
                field={field}
                fieldState={fieldState}
                {...field}
              />
            )}
          />

          {/* <CommonStyles.FormFieldUI name="gender" component={<} /> */}

          <div>
            <CommonStyles.ButtonUI fullWidth type="submit" variant="contained">
              Login
            </CommonStyles.ButtonUI>
          </div>
        </form>

        <CommonStyles.FormDebug />
      </FormProvider>
    </div>
  );
};

export default Login;
