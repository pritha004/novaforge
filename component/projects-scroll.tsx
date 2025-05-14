"use client";

import { PROJECTS } from "@/constants/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ProjectScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <>
      <div ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex px-4 h-full w-[400vw]">
            {PROJECTS.map((item, index) => (
              <div
                key={index}
                className="w-screen h-full flex flex-col justify-around "
              >
                {item.map((project, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      index == 0 ? "justify-start" : "justify-end"
                    } `}
                  >
                    <div>
                      <div className="relative h-[200px] md:h-[300px] w-[350px] md:w-[700px] mb-4">
                        <Image
                          src={project.src}
                          alt={project.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm">{project.title}</span>
                        <span className="text-sm">{project.text}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
