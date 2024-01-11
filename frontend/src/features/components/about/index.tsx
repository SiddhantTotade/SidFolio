import { Container } from "@mui/material";

import AboutPage from "./About";

export default function About() {
  return (
    <Container
      component="section"
      className="about"
      id="about"
      maxWidth={false}
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "#000000",
        color: "#ffffff",
        transform: "skew(0, 10deg)",
      }}
    >
      <AboutPage />
    </Container>
  );
}
