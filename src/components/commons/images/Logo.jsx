import Image from "next/image";
import React from "react";
import { imagesPath } from "../../../config";
import { Text2Xl } from "../index";

const Logo = ({ width, height, withText, justify }) => {
  return (
    <div className={`flex items-center ${justify}`}>
      <Image
        alt="Airbnb"
        src={imagesPath.logo}
        priority
        width={width}
        height={height}
      />
      {withText && (
        <Text2Xl text={withText} color="text-red-500" classes="font-bold" />
      )}
    </div>
  );
};

export default Logo;
