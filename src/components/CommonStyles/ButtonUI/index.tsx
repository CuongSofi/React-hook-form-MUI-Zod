import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface IProps {
  children: React.ReactNode | string;
}
const BUttonUI = (props: IProps & ButtonProps) => {
  //! state
  const { children, ...res } = props;
  //! function
  //! render
  return <Button {...res}>{children}</Button>;
};

export default BUttonUI;
