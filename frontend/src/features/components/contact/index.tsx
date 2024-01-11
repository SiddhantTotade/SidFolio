import { Container } from "@mui/material";

import Contact from "./Contact";

export default function MyContact() {
  return (
    <Container
      component="section"
      className="contact"
      id="contact"
      maxWidth={false}
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <Contact />
    </Container>
  );
}
