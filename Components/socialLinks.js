import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

function SocialLinks() {

    const links = [
        {id: 1,
         child: (
            <>
            Linkedin <FaLinkedin size={30}/>
            </>
         ),
        href: 'https://www.linkedin.com/in/anurag-sagar-5825a0228/',
        style: 'rounded-tr-md'
        },
        {id: 2,
            child: (
               <>
               Github <FaGithub size={30}/>
               </>
            ),
           href: 'https://github.com/Anurag00321',
           style: 'rounded-tr-md'
           },
           {id: 3,
            child: (
               <>
               Mail <HiOutlineMail size={30}/>
               </>
            ),
           href: 'mailto: anuragsagar1411@gmail.com',
           style: 'rounded-tr-md'
           
           },   
           {id: 4,
            child: ( 
               <>
               Twitter <FaTwitter size={30}/>
               </>
            ),
           href: 'https://twitter.com/Anurag_4518',
           style: 'rounded-tr-md'
           },   
    ]   
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-40'>
       <ul>

        {links.map(({id, child, href, style}) => (
         <li key={id} className={'flex justify-between border border-black items-center w-40 h-14 px-4 duration-300 bg-blue-700 ml-[-100px] hover:ml-[-10px] hover:rounded-md' + " " + style}>
         <a href={href} className='flex justify-between items-center w-full text-black' target='_blank' rel='noreferrer'>
           {child}  
         </a>
     </li>
        ))}
        
       </ul>
    </div>
  )
}

export default SocialLinks;