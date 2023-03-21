import React from "react";
import { ButtonTransparent, IconPlain, Logo, PopoverUser, TextMd } from "..";

const NavbarPrimary = () => {
  return (
    <div className="py-5 px-8 border-b">
      <div className="grid grid-cols-12 items-center justify-between">
        <div className="col-span-4">
          <Logo
            width={50}
            height={50}
            withText="airbnb"
            justify="justify-start"
          />
        </div>
        <div className="col-span-4">
          <div className="flex items-center justify-center shadow-md rounded-full p-2.5 w-full border-2">
            <TextMd text="Anywhere" classes="px-4 border-r border-gray-300" />
            <TextMd text="Any week" classes="px-4 border-r border-gray-300" />
            <TextMd text="Add guests" classes="px-4 border-r" />
            <IconPlain iconClass="fa-search" isRounded />
          </div>
        </div>
        <div className="col-span-4 flex items-center justify-end gap-2">
          <ButtonTransparent text="Airbnb your home" classes="rounded-full" />
          <PopoverUser />
        </div>
      </div>
    </div>
  );
};

export default NavbarPrimary;
