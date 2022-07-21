import React from 'react'
import Image from 'next/image'

function Skills() {
  const images = [
    {
      id: 1,
      image: '/assets/skills/html.png',
      text: 'HTML',
      style: 'shadow-black'
    },
    {
      id: 2,
      image: '/assets/skills/css.png',
      text: 'CSS',
      style: 'shadow-black'
    },
    {
      id: 3,
      image: '/assets/skills/JS.png',
      text: 'JavaScript',
      style: 'shadow-black'
    },
    {
      id: 4,
      image: '/assets/skills/React.png',
      text: 'React.js',
      style: 'shadow-black'
    },
    {
      id: 5,
      image: '/assets/skills/Next.png',
      text: 'Next.js',
      style: 'shadow-black'
    },
    {
      id: 6,
      image: '/assets/skills/Tailwind.png',
      text: 'TailwindCSS',
      style: 'shadow-black'
    },
    {
      id: 7,
      image: '/assets/skills/python.png',
      text: 'Python',
      style: 'shadow-black'
    },
    {
      id: 8,
      image: '/assets/skills/django.png',
      text: 'Django',
      style: 'shadow-black'
    }
  ]


  return (
    <div name="Skills" className='bg-gradient-to-b from-indigo-900 to-indigo-700 pb-8'>
      <div>
        <h2 className='text-indigo-200 text-center underline text-3xl py-8 '>My Skills</h2>
        <div className='grid md:grid-cols-3 grid-cols-2 px-4 gap-12 md:mx-40 content-center'>
        {images.map(({id, image, text, style}) => 
        <div key={id} className={`text-center border-4 border-indigo-400 my-3 hover:scale-110 w-[150px] shadow-lg ${style}`}>
        <Image src={image} width={150} height={150} />
        <h3 className='border-t border-indigo-400 bg-indigo-200 font-sans font-bold'>{text}</h3>
       </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Skills