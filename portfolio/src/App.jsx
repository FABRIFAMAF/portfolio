import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Technologies from './components/Technologies/Technologies'
import Projects from './components/Projects/Projects'

import profile from './data/profile'
import technologies from './data/technologies'
import projects from './data/projects'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Technologies technologies={technologies} />
      <Projects projects={projects} />
    </>
  )
}

export default App
