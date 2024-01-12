import { Container } from "@mui/material";
import Particles from "~/features/ui/Particles";

import HeroCard from "./Hero";

export default function Home() {
  return (
    <Container
      component="section"
      className="home"
      id="home"
      maxWidth={false}
      sx={{
        height: "100vh",
        position: "relative",
      }}
    >
      <Particles />
      <HeroCard />
    </Container>
  );
}
