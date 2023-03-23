import React, { useState } from "react";
import { ButtonTransparent, IconPlain, Logo, PopoverUser, TextMd } from "..";
import PopoverIsland from "../popover/Popover.island";
import { AnimatePresence, motion } from "framer-motion";

const NavbarPrimary = () => {
  // States
  const [isIslandOpen, setIsIslandOpen] = useState(false);

  // Framer Motion Variants
  const variants = {
    popup: {
      visible: {
        scaleX: 1,
        opacity: 1,
        y: 0,
        transition: { duration: 0.1 },
      },
      hidden: {
        scaleX: 1.5,
        opacity: 0,
        y: 40,
        transition: { duration: 0.1 },
      },
      exit: {
        scaleX: 1.5,
        opacity: 0,
        y: 40,
        transition: { duration: 0.1 },
      },
    },
  };

  return (
    <nav className="py-5 px-8 border-b h-24">
      <div className="grid grid-cols-12 items-center justify-between">
        <div className="col-span-4 z-10">
          <Logo
            width={50}
            height={50}
            withText="airbnb"
            justify="justify-start"
          />
        </div>
        <div className={`col-span-4 ${!isIslandOpen && "cursor-pointer"}`}>
          <PopoverIsland
            isIslandOpen={isIslandOpen}
            setIsIslandOpen={setIsIslandOpen}
          />
          <AnimatePresence mode="wait" initial={false}>
            {!isIslandOpen && (
              <motion.div
                variants={variants.popup}
                animate="visible"
                initial="hidden"
                exit="exit"
                onClick={() => setIsIslandOpen(true)}
                className="flex items-center justify-center shadow-md rounded-full p-2.5 border-2"
              >
                <TextMd
                  text="Anywhere"
                  classes="px-4 border-r border-gray-300"
                />
                <TextMd
                  text="Any week"
                  classes="px-4 border-r border-gray-300"
                />
                <TextMd text="Add guests" classes="px-4" />
                <IconPlain iconClass="fa-search" isRounded />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="col-span-4 flex items-center justify-end gap-2 z-10">
          <ButtonTransparent text="Airbnb your home" classes="rounded-full" />
          <PopoverUser />
        </div>
      </div>
    </nav>
  );
};

export default NavbarPrimary;
