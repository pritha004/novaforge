import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function ProjectMarquee() {
  return (
    <>
      <div className="h-[30vh] flex items-center justify-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="text-[calc(1rem+8vw)] uppercase font-bold"
        >
          PROJECTS
        </motion.h2>
      </div>
      <div className="flex justify-center items-center m-4">
        <Link
          href={"/projects"}
          className={`border-[1px] border-white 
                rounded-full px-6 py-2 text-white cursor-none`}
        >
          See All
        </Link>
      </div>

      <div className="overflow-hidden whitespace-nowrap w-full  py-4">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {PROJECTS.flat().map((project, index) => (
              <div
                className="relative h-[200px] md:h-[400px] w-[350px] md:w-[700px] mb-4 inline-block m-4"
                key={index}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
