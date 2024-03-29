import React from "react";
import "./styles/BackgroundBlob.css";
import BackgroundSvg from "./BackgroundSvg";

type Props = {};

export default function BackgroundBlob({}: Props) {
  return (
    <div className="container">
      <div className="blob"></div>
      <BackgroundSvg />
    </div>
  );
}
