import { Box } from "@mui/material";
import Image from "../common/Image";
import html from "~/assets/HTML.svg";

export default function MobileTechnology() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr);",
        height: "20vh",
        gap: "10px",
        marginTop: "10%",
        "@media(min-width:700px)": {
          display: "none",
        },
      }}
    >
      <Image img_src={html} width="100px" height="100px" />
    </Box>
  );
}
