import React from "react";

function About() {
  return (
    <div name="About" className="h-screen w-full bg-gradient-to-b from-indigo-900 to-indigo-700">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            I'm Anurag, a Web Developer
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            quasi pariatur officia aliquid inventore reprehenderit nisi rem quis
            architecto dicta eligendi fugiat vel optio! Ea, sapiente incidunt?
            Enim, fuga molestiae!
          </p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/b8/b7/fa/b8b7faa068cb612f21a7f7268313064b.png"
            className="rounded-2xl mx-12 mt-8 w-2/3 md:w-full h-full justify-center "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
