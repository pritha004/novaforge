import { ProjectScroll } from "@/component";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <h2 className="text-[calc(1rem+8vw)] uppercase font-plaster font-bold">
          PROJECTS
        </h2>
      </div>
      <ProjectScroll />
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <Link
          href={"/contact"}
          className="text-[calc(1rem+8vw)] uppercase font-plaster font-bold"
        >
          CONTACT
        </Link>
        <p className="my-4 text-[calc(1rem+0.1vw)] text-neutral-400 text-center uppercase flex flex-col">
          <span className="flex items-center">
            Let's Build the Next Big Thing
            <span className="text-white px-2 font-bold">⇧</span>
          </span>
        </p>
      </div>
    </>
  );
};

export default Projects;
