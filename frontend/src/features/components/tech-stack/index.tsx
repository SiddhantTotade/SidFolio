import { Container, Box } from "@mui/material";

import TechStack from "./TechStack";
import MobileTechnology from "./MobileTechnology";
import Technologies from "./Technologies";

export default function Skills() {
  return (
    <Container
      component="section"
      className="skills"
      id="skills"
      disableGutters
      maxWidth={false}
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "transparent",
        overflow: "hidden",
        border: "10px solid #000000",
        "@media(max-width:700px)": {
          border: 0,
        },
      }}
    >
      <MobileTechnology />
      <Box
        sx={{
          width: "50%",
          background: "#000000",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media(max-width:700px)": {
            display: "none",
          },
        }}
      >
        <TechStack />
      </Box>
      <Box
        sx={{
          width: "50%",
          "@media(max-width:700px)": {
            display: "none",
          },
        }}
      >
        <Technologies />
      </Box>
    </Container>
  );
}
