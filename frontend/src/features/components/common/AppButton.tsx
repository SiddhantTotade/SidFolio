import { Button } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  label: string | ReactNode;
  sx: any;
}

export default function AppButton({ label, sx, ...otherProps }: Props) {
  return (
    <Button sx={sx} {...otherProps}>
      {label}
    </Button>
  );
}
