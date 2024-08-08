import { TextField, TextFieldProps } from "@mui/material";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface IProps {
  field?: ControllerRenderProps<any, string>;
  fieldState?: ControllerFieldState;
}
const TextFieldForm = (props: IProps & TextFieldProps) => {
  const { field, fieldState, ...res } = props;
  const { error } = fieldState as ControllerFieldState;
  return <TextField error={!!error} helperText={error?.message} {...res} />;
};

export default TextFieldForm;
