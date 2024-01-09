import { Typography } from "@mui/material";
import TypeWriter from "~/features/ui/Typewriter";
import DataContainer from "../common/DataContainer";

export default function HeroCard() {
  return (
    <DataContainer>
      <Typography fontSize={20}>Ahoy, I'm</Typography>
      <Typography fontSize={30}>Siddhant Totade</Typography>
      <TypeWriter />
    </DataContainer>
  );
}
