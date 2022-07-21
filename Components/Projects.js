import React from 'react'
import Image from 'next/image'

function Projects() {

  const portfolios = [
    {
      id: 1,
      image: '/assets/projects/Portfolio.png',
      demo: 'https://portfolio-anurag4518.vercel.app/',
      code: 'https://github.com/Anurag00321/Portfolio/tree/main',
      desc: 'My portfolio website. This was created using Next.js and tailwindCSS. It is to showcase all my projects and my skills.',
      style: 'mb-4' 
    },
    {
      id: 2,
      image: '/assets/projects/netflixClone.png',
      demo: 'https://netflix-clone-next-jutmlss9a-anurag4518.vercel.app/',
      code: 'https://github.com/Anurag00321/Netflix-Clone',
      desc: 'A netflix clone made using next.js and tailwindCSS. It fetches data from tmdb api and shows the images of movie poster.It is fully responsive.',
      style: 'mb-4' 
    },
    {
      id: 2,
      image: '/assets/projects/WeatherApp.png',
      demo: 'https://anurag00321.github.io/Weather-app/',
      code: 'https://github.com/Anurag00321/Weather-app',
      desc: 'Weather app made using React. It fetches weather data from openweathermap api.You can search for a specific city and get its min and max temp. ',
      style: '',
    }
  ]
  return (
    <div name="Projects" className='bg-gradient-to-b from-indigo-700 to-indigo-900'>
    
        <h2 className='text-center text-3xl text-indigo-200 underline py-12'>My Projects</h2>
         <div className=' md:grid grid-cols-2'>
        {portfolios.map(({id, image, demo, code, desc, style}) => 
        <div key={id} className={'ml-20 bg-indigo-500 border border-indigo-400 mx-10 rounded-xl md:w-[500px] h-fit' + " " + style}>
        <Image src={image} alt="Netflix Clone" width="500" height="250" className="rounded-xl border-2 border-indigo-400"/>
        <div className='justify-between text-center py-3 px-6 flex content-center border-b border-indigo-400'>
          <a href={demo} target="_blank" rel='noreferrer'>
          <button className='px-12 rounded-xl bg-indigo-200' href={demo} >Demo</button>
          </a>
          <a href={code} target="_blank" rel='noreferrer'>
          <button className='px-12 rounded-xl  bg-indigo-200' href={code}>Code</button>
          </a>
        </div>
         <div className='text-white text-center font-mono px-1 py-2'>
          {desc}
         </div>
        </div>
         )}
         </div>
    </div>
  )
}

export default Projects