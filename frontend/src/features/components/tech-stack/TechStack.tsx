import { Box, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import BinarySvg from "./BinarySvg";

export default function TechStack() {
  return (
    <>
      <BinarySvg />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "@media(max-width:700px)": {
            position: "relative",
            top: 0,
            left: 0,
            justifyContent: "center",
            transform: "none",
          },
        }}
      >
        <Typography color={"#ffffff"} fontWeight={"bold"} fontSize={50}>
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
            color: "#ffffff",
          }}
        >
          ST{<ConstructionIcon sx={{ marginTop: "10px", fontSize: "50px" }} />}
          CK
        </Typography>
      </Box>
    </>
  );
}
