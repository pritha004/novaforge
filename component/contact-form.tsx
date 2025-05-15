"use client";

import { motion } from "motion/react";
import React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Simulate send
    setTimeout(() => {
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    }, 1000);
  };

  return (
    <>
      <section className="max-w-xl mx-auto px-4">
        <h2 className="text-[calc(1rem+2vw)] text-center font-semibold mb-12 text-white">
          Let’s Create Something Amazing Together
        </h2>
        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-8 w-full"
        >
          <div className="border-white px-0 pb-2 border-b w-full">
            <input
              type="text"
              name="text"
              placeholder="Your Name"
              className="border-0 bg-transparent placeholder:font-medium text-medium text-white placeholder:text-neutral-400 outline-none"
            />
          </div>
          <div className="border-white px-0 pb-2 border-b w-full">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border-0 bg-transparent placeholder:font-medium text-medium text-white placeholder:text-neutral-400 outline-none"
            />
          </div>
          <div className="border-white px-0 pb-2 border-b w-full">
            <textarea
              placeholder="Message"
              name="message"
              rows={1}
              className="border-0 bg-transparent w-full placeholder:font-medium text-medium text-white placeholder:text-neutral-400 outline-none resize-none"
            />
          </div>

          {sent ? (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
              className="text-[12px] text-neutral-400"
            >
              Your message has been sent!
            </motion.span>
          ) : (
            <button
              type="submit"
              className="border-white px-4 py-2 border rounded-[20px] text-base text-white"
            >
              Send Message
            </button>
          )}
        </form>
      </section>
    </>
  );
}
