import React, { useState } from "react";
import { IconPlain } from "../index";
import Link from "next/link";

const PopoverUser = () => {
  // Popover State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="user-popover cursor-pointer flex items-center justify-center gap-1 border-2 px-2 py-1.5 rounded-full"
      >
        <IconPlain
          iconClass="fa-bars"
          bgColor="bg-white"
          iconColor="text-black"
        />
        <IconPlain
          iconClass="fa-user-circle"
          bgColor="bg-white"
          iconColor="text-black"
        />
      </div>
      <div
        className={`absolute -bottom-32 border rounded-lg py-4 px-7 w-56 right-2 popover shadow-xl bg-white  transition-all duration-300 ${
          isOpen ? "scale-1 opacity-1" : "scale-0 opacity-0"
        }`}
      >
        <div className="my-3">
          <Link href="/login">Login</Link>
        </div>
        <div className="my-3">
          <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default PopoverUser;
