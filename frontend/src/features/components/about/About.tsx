import { Typography, Box } from "@mui/material";
import DataContainer from "../common/DataContainer";
import Image from "../common/Image";
import SvgDesign from "~/features/ui/SvgDesign";

export default function AboutPage() {
  return (
    <DataContainer>
      <Box
        sx={{
          width: "50%",
          position: "absolute",
          background: "transparent",
          transform: "translate(-200%, -33%)",
          zIndex: "-2",
          opacity: "0.4",
          "@media(max-width:1096px)": {
            width: "80%",
          },
        }}
      >
        <SvgDesign />
      </Box>
      <Typography fontSize={40}>About Me</Typography>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography sx={{ textAlign: "justify" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, nemo
          aliquid? Voluptatibus voluptates doloribus modi quisquam reiciendis,
          blanditiis molestiae veritatis magni neque voluptas iusto adipisci
          saepe ipsa tempora est placeat soluta expedita dolore rerum sapiente
          officia temporibus nobis. Velit non praesentium mollitia. Distinctio
          harum eum neque molestias saepe at ad.
        </Typography>
        <Box
          sx={{
            position: "absolute",
            transform: "transalte(-20%,60%)",
            zIndex: "-2",
            border: "3px solid white",
            right: "0",
          }}
        >
          <Image
            img_src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b083c430-0a18-43c8-8138-1975dd3ac0a0/dfnjied-274dd7ca-03db-4ddc-83bb-a6ae374d1efc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwODNjNDMwLTBhMTgtNDNjOC04MTM4LTE5NzVkZDNhYzBhMFwvZGZuamllZC0yNzRkZDdjYS0wM2RiLTRkZGMtODNiYi1hNmFlMzc0ZDFlZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wzr36uU4ypMAP7kpidGWeuXIA2bdzRpLqGlVibMQpxo"
            width="200"
            height="250"
          />
        </Box>
      </Box>
    </DataContainer>
  );
}
