"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/nav-links";
import { linkVariants } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.8 } }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
              className="top-0 left-0 z-[98] fixed flex flex-col justify-center items-center gap-4 bg-black w-screen h-screen"
            >
              {NAV_LINKS.map((route, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-[4rem] font-plaster text-white cursor-none`}
                  >
                    {route.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      }
      <nav className="top-0 left-0 z-[99] fixed flex justify-between items-center p-6 md:p-10 w-full">
        <Link href={"/"} className="font-plaster text-2xl">
          NF
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1"
          >
            <motion.span
              initial={false}
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 4 : 0,
              }}
              className="w-8 h-1 bg-white rounded transition-all"
              transition={{
                duration: 0.2,
                ease: "linear",
              }}
            />
            <motion.span
              initial={false}
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -4 : 0,
              }}
              className="w-8 h-1 bg-white rounded transition-all"
              transition={{
                duration: 0.2,
                ease: "linear",
              }}
            />
          </button>
        </div>
      </nav>
    </>
  );
};
