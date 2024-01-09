import { Box, Link } from "@mui/material";
import AppButton from "../common/AppButton";

const navLinks = ["Home", "About", "Portfolio", "Skills", "Contact"];

export default function NavLink() {
  return (
    <Box
      id="navLinks"
      sx={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        "@media(max-width:1096px)": {
          width: "100%",
        },
        "@media(max-width:700px)": {
          display: "none",
        },
      }}
    >
      {navLinks.map((link, id) => (
        <Link key={id} href={`#${link.toLowerCase()}`}>
          {link}
        </Link>
      ))}
      <Box
        sx={{
          position: "absolute",
          transform: "translate(-20%, 10%)",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          zIndex: "-2",
        }}
      >
        {navLinks.map((link, id) => (
          <Link
            sx={{ color: "#ffffff" }}
            key={id}
            href={`#${link.toLowerCase()}`}
          >
            {link}
          </Link>
        ))}
      </Box>
      <AppButton
        sx={{
          color: "#ffffff",
          background: "#000000",
          border: "2px solid #ffffff",
          "&:hover": {
            background: "#000000",
          },
        }}
        label="Download CV"
      />
    </Box>
  );
}
