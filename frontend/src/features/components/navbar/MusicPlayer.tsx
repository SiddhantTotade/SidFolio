import { useState, useRef } from "react";
import { Box } from "@mui/material";

import Music from "~/assets/SidFolioMusic.mp3";
import Wave from "../../ui/Wave";

export default function MusicPlayer() {
  const [status, setStatus] = useState(false);
  const audioRef = useRef(new Audio(Music));

  const toggleAudio = () => {
    if (status) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setStatus(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    }
  };

  return (
    <Box onClick={toggleAudio}>
      <Wave />
      <audio
        id="divAudio"
        ref={audioRef}
        src={Music}
        onPlay={() => setStatus(true)}
        onPause={() => setStatus(false)}
        autoPlay
        loop
      />
    </Box>
  );
}
