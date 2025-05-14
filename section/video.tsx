"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Video = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale from small to full size (1 to 3)
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  // Text animation from sides
  const leftTextX = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);
  const rightTextX = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] ">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Motion wrapper that scales video */}
        <motion.div
          style={{ scale }}
          className="relative z-10 w-full h-full aspect-video overflow-hidden rounded-xl"
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/craftive.mp4"
            autoPlay
            loop
            muted
          />
        </motion.div>

        {/* Sliding text from sides */}
        <div className="absolute top-1/2 left-1/2 z-20 flex gap-2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.span
            style={{ x: leftTextX, opacity: textOpacity }}
            className="text-[calc(1rem+6vw)] uppercase font-bold"
          >
            DO
          </motion.span>
          <motion.span
            style={{ x: rightTextX, opacity: textOpacity }}
            className="text-[calc(1rem+6vw)] uppercase font-bold line-through"
          >
            UBT
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Video;
