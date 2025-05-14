"use client";

import { Contact, Expertise, Home, ProjectMarquee, Video } from "@/section";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Home />
      <Video />
      <ProjectMarquee />
      <Expertise />
      <Contact />
    </div>
  );
};

export default MainPage;
