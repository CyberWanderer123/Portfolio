import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import SocialLinks from '../Components/socialLinks'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Anurag</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar/>
     <About/>
     <SocialLinks/>
    
     <Projects/>
     <Skills/>
     <Contact/>
     </div>
  )
}
