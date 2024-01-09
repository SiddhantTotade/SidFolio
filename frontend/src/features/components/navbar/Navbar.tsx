import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import NavLink from "./NavLinks";
export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: "100%",
        background: "transparent",
        color: "#000000",
        backdropFilter: "blur(3px)",
        "@media(max-width:700px)": {
          position: "absolute",
        },
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: "50%",
            "@media(max-width:1096px)": {
              width: "30%",
            },
          }}
        >
          <Typography variant="h4">SidFolio</Typography>
          <Typography
            sx={{
              position: "absolute",
              zIndex: "-2",
              transform: "translate(-3%,-97%)",
              color: "#ffffff",
            }}
            variant="h4"
          >
            SidFolio
          </Typography>
        </Box>
        <NavLink />
      </Toolbar>
    </AppBar>
  );
}
