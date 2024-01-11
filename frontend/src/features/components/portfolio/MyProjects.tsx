import { createRef } from "react";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Card } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { useProjectsQuery } from "~/features/serivces/apiService";

export default function MyProjects() {
  const { data } = useProjectsQuery(undefined);
  const navigate = useNavigate();
  const refs = data?.map(() => createRef());

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        placeItems: "center",
        gap: "30px",
      }}
    >
      {data?.map((project: any, id: string) => (
        <Draggable nodeRef={refs[id]} key={id} handle=".handle">
          <Card
            ref={refs[id]}
            elevation={12}
            sx={{ width: "80%", marginTop: "20px", margin: 0, padding: "10px" }}
            className="handle"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography fontSize={25} fontWeight={"bold"}>
                {project.title}
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={"bold"}
                sx={{ textAlign: "justify" }}
              >
                {project.description}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "10vh",
                display: "flex",
                marginTop: "10px",
              }}
            >
              {!project.is_live ? (
                <Box
                  sx={{
                    width: project.is_live ? "50%" : "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GitHubIcon
                    onClick={() => {
                      navigate(project.github);
                    }}
                    sx={{ cursor: "none" }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    width: project.is_live ? "50%" : "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <OpenInNewIcon
                    onClick={() => {
                      navigate(project.live);
                    }}
                    sx={{ cursor: "none" }}
                  />
                </Box>
              )}
            </Box>
          </Card>
        </Draggable>
      ))}
    </Box>
  );
}
