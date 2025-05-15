import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-screen h-screen text-center">
      <h1 className="font-bold flex items-center text-[calc(1rem+10vw)] md:text-[calc(1rem+12vw)] text-white uppercase font-plaster">
        Novaforge
      </h1>
      <div className="flex flex-col justify-center items-center text-neutral-400 text-[calc(1rem+0.2vw)] text-center uppercase">
        <p>New Visions Born. Old Visions Reimagined.</p>
      </div>
    </div>
  );
};

export default Home;
