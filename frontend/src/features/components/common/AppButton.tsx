import { Button } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  label: string | ReactNode;
}

export default function AppButton({ label, ...otherProps }: Props) {
  return <Button {...otherProps}>{label}</Button>;
}
