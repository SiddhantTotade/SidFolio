import React from "react";

import { textStyle } from "./data/introData";

export default function Home() {
  return (
    <div className="absolute w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      {textStyle.map((item, index) => (
        <p
          key={index}
          className={`font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text animate-text`}
        >
          {item.label}
        </p>
      ))}
    </div>
  );
}
