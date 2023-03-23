import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabsUnderlined } from "../index";
import { Tabs } from "../../../config";

const PopoverIsland = ({ setIsIslandOpen, isIslandOpen }) => {
  // Framer Motion Variants
  const variants = {
    island: {
      visible: {
        height: "13rem",
        transition: { duration: 0.2 },
      },
      hidden: {
        height: "6rem",
        transition: { duration: 0.2 },
      },
      exit: {
        height: "0",
        transition: { duration: 0.2 },
      },
    },
    container: {
      visible: {
        scaleX: 1,
        scaleY: 1,
        y: 30,
        opacity: "1",
        transition: { duration: 0.2 },
      },
      hidden: {
        scaleX: 0,
        scaleY: 0,
        y: -40,
        opacity: "0",
        transition: { duration: 0.2 },
      },
      exit: {
        scaleX: 0,
        scaleY: 0,
        y: -40,
        opacity: "0",
        transition: { duration: 0.2 },
      },
    },
  };

  return (
    <>
      {isIslandOpen && (
        <div
          className="bg-[rgba(0,0,0,0.1)] h-screen w-screen absolute cursor-pointer left-0 right-0 bottom-0 top-0"
          onClick={() => setIsIslandOpen(false)}
        ></div>
      )}
      <AnimatePresence>
        {isIslandOpen && (
          <motion.div
            key="island"
            variants={variants.island}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white h-44 top-0 text-center absolute left-0 w-full"
          >
            <motion.div key="child" variants={variants.container}>
              <TabsUnderlined tabs={Tabs.island} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopoverIsland;
