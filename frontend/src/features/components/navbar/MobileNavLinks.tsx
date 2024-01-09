import { Box, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import TerminalIcon from "@mui/icons-material/Terminal";
import ConnectWithoutContactSharpIcon from "@mui/icons-material/ConnectWithoutContactSharp";

const navLinks = ["Home", "About", "Portfolio", "Skills", "Contact"];

export default function MobileNavLink() {
  return (
    <Box
      id="navLinks"
      sx={{
        width: "80%",
        height: "5vh",
        display: "flex",
        background: "#ffffff",
        justifyContent: "space-evenly",
        alignItems: "center",
        left: "9%",
        borderRadius: "100px",
        bottom: 20,
        position: "fixed",
        zIndex: "10",
        "@media(min-width:700px)": {
          display: "none",
        },
      }}
    >
      {navLinks.map((link, id) => (
        <Link key={id} href={`#${link}`}>
          {link === "Home" ? (
            <HomeIcon />
          ) : link === "About" ? (
            <PersonIcon />
          ) : link === "Portfolio" ? (
            <AllInclusiveIcon />
          ) : link === "Skills" ? (
            <TerminalIcon />
          ) : (
            <ConnectWithoutContactSharpIcon />
          )}
        </Link>
      ))}
    </Box>
  );
}
