import React from "react";
import { IconPlain, TextMd } from "../index";

const ButtonIconned = ({
  width,
  height,
  padding,
  text,
  color,
  onClick,
  classes,
  icon,
  iconColor,
  iconPosition = "left",
}) => {
  return (
    <button
      onClick={onClick || null}
      className={`${width || "w-28"} ${height || "h-12"} ${
        padding || "p-3 pr-5"
      } ${
        color ||
        "bg-red-500 rounded-full flex mx-auto items-center justify-center"
      } ${classes || ""}`}
    >
      {iconPosition === "left" && icon && (
        <IconPlain
          iconClass={icon}
          size="text-sm"
          iconColor={iconColor || ""}
        />
      )}
      <TextMd text={text} color="text-white" />
      {iconPosition === "right" && icon && (
        <IconPlain
          iconClass={icon}
          size="text-sm"
          iconColor={iconColor || ""}
        />
      )}
    </button>
  );
};

export default ButtonIconned;
