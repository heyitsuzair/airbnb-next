import React from "react";
import { TextMd } from "../index";

const ButtonTransparent = ({
  width,
  height,
  padding,
  text,
  color,
  onClick,
  classes,
}) => {
  return (
    <button
      onClick={onClick || null}
      className={`${width || "w-44"} ${height || "h-12"} ${padding || "p-3"} ${
        color || "hover:bg-gray-100"
      } ${classes || ""}`}
    >
      <TextMd text={text} />
    </button>
  );
};

export default ButtonTransparent;
