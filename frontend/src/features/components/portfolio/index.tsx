import { Container } from "@mui/material";

import Portfolio from "./Portfolio";
import MyProjects from "./MyProjects";

export default function MyPortfolio() {
  return (
    <Container
      component="section"
      className="portfolio"
      id="portfolio"
      maxWidth={false}
      sx={{
        width: "100%",
        height: "120vh",
        position: "relative",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <Portfolio />
      <MyProjects />
    </Container>
  );
}
