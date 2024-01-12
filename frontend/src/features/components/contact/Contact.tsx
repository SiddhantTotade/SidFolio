import { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "./styles/styles.module.css";
import { Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Contact() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="flex fill center" onClick={() => set((state) => !state)}>
      <a.div
        style={{ display: flipped ? "none" : "flex" }}
        className={`${styles.c} ${styles.back}`}
      >
        <Typography
          sx={{ position: "absolute" }}
          fontSize={70}
          fontWeight={"bold"}
        >
          Contact
        </Typography>
      </a.div>
      <a.div
        className={`${styles.c} ${styles.front}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        <Typography fontSize={20} fontWeight={"bold"}>
          siddhanttotade.1994@gmail.com
        </Typography>
        <Box
          sx={{
            border: "2px solid",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#ffffff",
            height: "5vh",
          }}
        >
          <GitHubIcon />
          <LinkedInIcon />
          <DescriptionIcon />
        </Box>
      </a.div>
    </div>
  );
}
