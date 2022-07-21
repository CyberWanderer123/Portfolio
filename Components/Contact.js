import React from "react";

function Contact() {
  return (
    <div name="Contact" className="bg-gradient-to-b from-indigo-700 to-indigo-900 w-full h-screen ">
      <div>
        <div className=" h-full">
          <h2 className="text-center text-indigo-200 underline text-3xl py-6">
            Contact
          </h2>
          <p className="text-xl text-center py-4 px-16  text-indigo-100">
            Submit the following form to get in touch with me
          </p>
        </div>
        <div>
          <form action="https://getform.io/f/1808368a-9079-4da8-bf1a-e130bf6c045a" method="POST" className="flex flex-col bottom-2 border-indigo-200 w-full md:w-1/2 md:mx-80 px-4">
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="p-2 bg-transparent border text-white focus:outline-none"
            />
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              className="p-2 bg-transparent border text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Message"
              className="p-2 bg-transparent border text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
