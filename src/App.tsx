import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import FeaturedProject from './sections/FeaturedProject'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Interests from './sections/Interests'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  return (
    <div className={dark ? 'dark' : 'light'}>
      <div className="min-h-screen bg-brand-darker text-white relative overflow-x-hidden">
        {/* Global ambient glow */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-orange/3 blur-[100px]" />
        </div>

        <Navbar dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <FeaturedProject />
          <Projects />
          <Skills />
          <Interests />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
