import React from "react";
import { TextMd } from "../index";

const ButtonPlain = ({
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
      className={`${width || "w-28"} ${height || "h-12"} ${padding || "p-3"} ${
        color || "bg-red-500 rounded-full"
      } ${classes || ""}`}
    >
      <TextMd text={text} color="text-white" />
    </button>
  );
};

export default ButtonPlain;
