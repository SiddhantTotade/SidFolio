import { TypeAnimation } from "react-type-animation";

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={["Developer", 1000, "Designer", 1000, "Debugger", 1000]}
      style={{ fontSize: "3em" }}
      repeat={Infinity}
    />
  );
}
