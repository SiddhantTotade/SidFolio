import { Box, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

import Image from "../common/Image";
import { useSkillsQuery } from "~/features/serivces/apiService";

export default function MobileTechnology() {
  const { data } = useSkillsQuery(undefined);

  return (
    <Box
      sx={{
        display: "grid",
        justifyItems: "center",
        "@media(min-width:700px)": {
          display: "none",
        },
      }}
    >
      <Typography fontSize={30} sx={{ justifyContent: "center" }}>
        TECH ST
        {
          <ConstructionIcon
            fontSize="medium"
            sx={{
              gap: "10px",
              padding: "0px 3px",
              flexDirection: "column",
              justifyContent: "center",
            }}
          />
        }
        CK
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: "repeat(3, 1fr);",
          gap: "50px",
          marginTop: "10%",
        }}
      >
        {data?.map((skill: string | any, id: number) => (
          <Image
            key={id}
            img_src={`http://127.0.0.1:8000${skill.skill_logo}`}
            width="30px"
            height="30px"
          />
        ))}
      </Box>
    </Box>
  );
}
