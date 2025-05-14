import { ContactForm } from "@/component";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <h2 className="text-[calc(1rem+8vw)] font-plaster font-bold">
          CONTACT
        </h2>
        <p className="my-4 text-[calc(1rem+0.1vw)] text-neutral-400 text-center uppercase flex flex-col">
          <span className="">
            Ready to bring your ideas to life? Whether you&apos;re looking for a
            simple
          </span>
          <span className="">
            logo or a complex web app, we’re here to help.
          </span>
        </p>
      </div>
      <ContactForm />
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <Link
          href={"/projects"}
          className="text-[calc(1rem+8vw)] uppercase font-plaster font-bold"
        >
          PROJECTS
        </Link>
        <p className="my-4 text-[calc(1rem+0.1vw)] text-neutral-400 text-center uppercase flex flex-col">
          <span className="flex items-center">
            Explore our recent work{" "}
            <span className="text-white px-2 font-bold">⇧</span>
          </span>
        </p>
      </div>
    </>
  );
};

export default Contact;
