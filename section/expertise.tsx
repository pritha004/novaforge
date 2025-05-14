"use client";

import { motion } from "framer-motion";

import { SERVICES } from "@/constants/expertise";

export default function Expertise() {
  return (
    <>
      <section className="relative h-[102vh] bg-black text-white overflow-hidden mt-8">
        <video
          className="w-full h-full object-cover"
          src="/videos/expertise.mp4"
          autoPlay
          loop
          muted
        />

        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="text-[calc(1rem+6vw)] uppercase font-bold absolute top-8 text-black z-20 m-8"
        >
          OUR EXPERTISE
        </motion.h2>

        <div className="absolute top-32 md:top-40 z-20 text-black">
          {SERVICES.map((service, index) => {
            return (
              <div key={index} className={`m-12 text-neutral-500`}>
                <h3 className="text-[calc(1rem+0.5vw)]">{service}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
