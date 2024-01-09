import { Box, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import Technologies from "./Technologies";
import MobileTechnology from "./MobileTechnology";

export default function TechStack() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          "@media(max-width:700px)": {
            position: "relative",
            top: 0,
            left: 0,
            justifyContent: "center",
            transform: "none",
          },
        }}
      >
        <Typography fontWeight={"bold"} fontSize={50}>
          Tech
        </Typography>
        <Typography
          fontWeight={"bold"}
          fontSize={50}
          sx={{
            display: "flex",
            alignItems: "center",
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ST{<ConstructionIcon sx={{ marginTop: "10px", fontSize: "50px" }} />}
          CK
        </Typography>
        <Technologies />
      </Box>
      <MobileTechnology />
    </>
  );
}
