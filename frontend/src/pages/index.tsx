import Particles from "~/features/ui/Particles";
import Navbar from "~/features/components/navbar/Navbar";
import Hero from "~/features/components/home/Hero";
import { Container } from "@mui/material";
import AboutPage from "~/features/components/about/About";
import Portfolio from "~/features/components/portfolio/Portfolio";
import MyProjects from "~/features/components/portfolio/MyProjects";
import TechStack from "~/features/components/tech-stack/TechStack";
import Contact from "~/features/components/contact/Contact";
import MobileNavLink from "~/features/components/navbar/MobileNavLinks";

export function IndexPage() {
  return (
    <>
      <Navbar />
      <MobileNavLink />
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
        <Hero />
      </Container>
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
      <Container
        component="section"
        className="portfolio"
        id="portfolio"
        maxWidth={false}
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        <Portfolio />
        <MyProjects />
      </Container>
      <Container
        component="section"
        className="tech-stack"
        id="tech-stack"
        maxWidth={false}
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        <TechStack />
      </Container>
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
    </>
  );
}
