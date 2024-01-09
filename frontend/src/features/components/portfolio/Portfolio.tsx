import { Typography } from "@mui/material";
import ParallaxText from "~/features/ui/PortfolioText";

export default function Portfolio() {
  return (
    <Typography
      component="div"
      sx={{
        marginTop: "50px",
        letterSpacing: "50px",
        fontSize: "200px",
        "@media(max-width:1096px)": {
          fontSize: "100px",
        },
      }}
      fontWeight={"bold"}
    >
      <ParallaxText baseVelocity={-5}>PORTFOLIO</ParallaxText>
    </Typography>
  );
}
