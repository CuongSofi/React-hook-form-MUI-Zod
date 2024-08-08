import { DevTool } from "@hookform/devtools";
import { useFormContext } from "react-hook-form";

const FormDebugUI = () => {
  const { control } = useFormContext();
  return <DevTool control={control} />;
};

export default FormDebugUI;
