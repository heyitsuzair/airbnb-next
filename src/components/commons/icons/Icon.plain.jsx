import React from "react";

const IconPlain = ({ iconClass, iconColor, bgColor, size, isRounded }) => {
  const className = `fa ${iconClass} ${iconColor || "text-white"} ${
    bgColor || "bg-red-500"
  } ${size || "text-md"} w-7 h-7 flex items-center justify-center p-4 ${
    isRounded ? "rounded-full" : ""
  }`;

  return <i className={className}></i>;
};

export default IconPlain;
