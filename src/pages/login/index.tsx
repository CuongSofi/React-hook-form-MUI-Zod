import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CommonStyles from "../../components";
import { ILogin } from "../../modules/auth/interfaces/auth.interface";
import loginSchema from "../../schemas/auth/loginSchema";

const Login = () => {
  //! state

  const methods = useForm<ILogin>({
    defaultValues: initialValues,
    resolver: zodResolver(loginSchema),
  });
  const { handleSubmit } = methods;
  //! function
  const onSubmit: SubmitHandler<ILogin> = (values) => {
    console.log(values);
  };
  //! render
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <CommonStyles.FormFieldUI
            name="username"
            component={({ field, fieldState }) => (
              <CommonStyles.TextFieldForm
                variant="outlined"
                fullWidth
                label="Username"
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
                label="Password"
                fullWidth
                field={field}
                fieldState={fieldState}
                {...field}
              />
            )}
          />

          <div>
            <CommonStyles.ButtonUI type="submit" variant="contained">
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

const initialValues: ILogin = {
  username: "",
  password: "",
};
