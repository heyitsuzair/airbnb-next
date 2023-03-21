import React from "react";

const TextLg = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-sm md:text-lg ${color || "text-black"} ${classes || ""}`}
    >
      {text}
    </h1>
  );
};

export default TextLg;
