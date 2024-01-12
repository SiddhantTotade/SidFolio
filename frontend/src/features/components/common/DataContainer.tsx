import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function DataContainer({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        "@media(max-width:1096px)": {
          width: "90%",
        },
      }}
    >
      {children}
    </Box>
  );
}
