import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  useFormContext,
  UseFormStateReturn,
} from "react-hook-form";

interface IProps {
  name: string;
  component: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }) => React.ReactElement;

  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
}
const FormFieldUI = (props: IProps) => {
  const { name, component, rules } = props;
  const Component = component;
  const { control } = useFormContext();

  //! render
  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={Component}
    />
  );
};

export default FormFieldUI;
