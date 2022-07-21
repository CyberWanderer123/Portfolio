import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

function Navbar() {

  const [nav,setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-indigo-900 fixed z-10">
      <div>
        <h1 className="text-3xl ml-2 text-indigo-100">Anurag</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 capitalize font-medium cursor-pointer  text-indigo-200 hover:scale-110 duration-100"
          >
           <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
      {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-indigo-900 to-indigo-700 text-indigo-200">
      {links.map(({ id, link }) => (
          <li 
            key={id}
            className="px-4 capitalize cursor-pointer py-6 text-4xl"
          >
             <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default Navbar;
