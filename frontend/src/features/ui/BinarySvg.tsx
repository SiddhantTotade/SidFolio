import React from "react";

export default function BinarySvg() {
  const sequenceLength = 25;
  const yOffsetIncrement = 35;
  const textElement = (
    <text x="10" y="30" className="num">
      1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1
      0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0
      1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1
      1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1
    </text>
  );

  return (
    <svg
      style={{
        width: "80%",
        position: "absolute",
        opacity: "0.2",
        fontFamily: "Diphylleia, serif",
        fontSize: "10px",
        fill: "#ffffff",
        transform: "skewX(20deg)",
      }}
      height="800"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: sequenceLength }, (_, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(textElement, {
            y: `${30 + index * yOffsetIncrement}`,
          })}
        </React.Fragment>
      ))}
    </svg>
  );
}
