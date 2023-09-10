"use client";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Education, Works, StarsCanvas } from "../components";

export default function Home() {
  return (
    <div>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div>game</div>
      </div>
    </div>
  )
}

