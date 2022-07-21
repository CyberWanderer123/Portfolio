import React from "react";
import Image from "next/image";

function About() {
  return (
    <div name="About" className="h-screen w-full bg-gradient-to-b from-indigo-900 to-indigo-700">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div>
          <h2 className="text-3xl sm:text-5xl py-6 mt-16 font-bold text-white">
            My name is Anurag and I am a Web Developer
          </h2>
          
        </div>
        <div>
          <Image
            src="/assets/dev.png" width={500} height={400}
            className="rounded-2xl px-8 mt-8 justify-center"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
