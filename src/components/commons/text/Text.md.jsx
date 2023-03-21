import React from "react";

const TextMd = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-base md:text-md ${color || "text-black"} ${
        classes || ""
      }`}
    >
      {text}
    </h1>
  );
};

export default TextMd;
