import Particles from "~/features/ui/Particles";
import Navbar from "~/features/components/navbar/Navbar";
import Hero from "~/features/components/home/Hero";
import { Container, Box } from "@mui/material";
import AboutPage from "~/features/components/about/About";
import Portfolio from "~/features/components/portfolio/Portfolio";
import MyProjects from "~/features/components/portfolio/MyProjects";
import TechStack from "~/features/components/tech-stack/TechStack";
import Contact from "~/features/components/contact/Contact";
import MobileNavLink from "~/features/components/navbar/MobileNavLinks";
import Technologies from "~/features/components/tech-stack/Technologies";
import MobileTechnology from "~/features/components/tech-stack/MobileTechnology";

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
          height: "120vh",
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
