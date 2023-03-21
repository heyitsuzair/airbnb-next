import React from "react";

const Text7Xl = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-4xl md:text-7xl ${color || "text-black"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default Text7Xl;
