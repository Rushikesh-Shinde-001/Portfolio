import React, { useEffect } from 'react'
import { initTheme } from './utils/theme'
import AnimatedBackground from './assets/components/AnimatedBackground';
import Header from './assets/components/Header';
import Hero   from   './assets/components/Hero';
import Skills from './assets/components/pages/Skills';
import Projects from './assets/components/pages/Projects';
import Contact from './assets/components/pages/Contact';

const App = () => {

    useEffect(()=>{
        initTheme();
}, [])

  return (

    <>
    <div className='min-h-screen grid-pattern dark:grid-pattern-light'>
  <AnimatedBackground />
 
<main>
   <Header/>
  <Hero></Hero>
  <Skills></Skills>
  <Projects></Projects>
  <Contact></Contact>
</main>
    </div>
   </>
  )
}

export default App
