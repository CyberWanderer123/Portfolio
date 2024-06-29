import React from 'react'
import Image from 'next/image'

function Projects() {

  const portfolios = [
    {
      id: 2,
      image: '/assets/projects/Chat.png',
      demo: 'https://chat-psi-rouge.vercel.app/',
      code: '',
      desc: 'A chat app made using react and firebase. It supports creating new user using email and user can chat with any other user from the list',
      style: 'mb-4'
    },
    {
      id: 3,
      image: '/assets/projects/scroll.png',
      demo: 'https://scroll-xi.vercel.app/',
      code: 'https://github.com/Anurag00321/scroll',
      desc: 'Clone of peerlist scroll component made using Next.js, tailwindCSS and firebase. You can create and send a post with context.',
    },
    {
      id: 4,
      image: '/assets/projects/Portfolio.png',
      demo: 'https://portfolio-anurag4518.vercel.app/',
      code: 'https://github.com/Anurag00321/Portfolio/tree/main',
      desc: 'My portfolio website. This was created using Next.js and tailwindCSS. It is to showcase all my projects and my skills.',
      style: 'mb-4'
    },
    {
      id: 5,
      image: '/assets/projects/netflixClone.png',
      demo: 'https://netflix-clone-next-jutmlss9a-anurag4518.vercel.app/',
      code: 'https://github.com/Anurag00321/Netflix-Clone',
      desc: 'A netflix clone made using next.js and tailwindCSS. It fetches data from tmdb api and shows the images of movie poster.It is fully responsive.',
      style: 'mb-4'
    },
    {
      id: 6,
      image: '/assets/projects/WeatherApp.png',
      demo: 'https://anurag00321.github.io/Weather-app/',
      code: 'https://github.com/Anurag00321/Weather-app',
      desc: 'Weather app made using React. It fetches weather data from openweathermap api.You can search for a specific city and get its min and max temp. ',
      style: '',
    },
    {
      id: 1,
      image: '/assets/projects/lost-found.png',
      demo: 'https://lost-found-gray.vercel.app/',
      code: 'https://github.com/Anurag00321/lost-found',
      desc: 'Lost and Found web app to reunite lost items with their owners.',
      style: '',
    },

  ]
  return (
    <div name="Projects" className='bg-gradient-to-b from-indigo-700 to-indigo-900'>

      <h2 className='text-center text-3xl text-indigo-200 underline pt-8 pb-8'>My Projects</h2>
      <div className=' md:grid grid-cols-2 justify-items-center px-6'>
        {portfolios.map(({ id, image, demo, code, desc, style }) =>
          <div key={id} className={' bg-indigo-500 border border-indigo-400 rounded-xl md:mx-4 md:h-96 lg:w-[500px] h-fit' + " " + style}>
            <Image src={image} width="500" height="250" className="rounded-xl md:w-fit border-2 border-indigo-400" />
            <div className='justify-between text-center px-4 py-3 flex content-center border-b border-indigo-400'>
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