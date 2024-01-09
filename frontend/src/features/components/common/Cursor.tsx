import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={30}
      innerScale={1}
      outerScale={2}
      outerAlpha={1}
      innerStyle={{
        zIndex: "10000",
        background: "#ffffff",
        mixBlendMode: "exclusion",
      }}
      outerStyle={{
        zIndex: "10000",
        color: "#ffffff",
        background: "#ffffff",
        mixBlendMode: "exclusion",
        border: "2px solid #000000",
      }}
    />
  );
}
