import React from "react";

const Text3Xl = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-xl md:text-3xl ${color || "text-black"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default Text3Xl;
