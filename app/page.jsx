"use client";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Education, Works, StarsCanvas } from "../components";
import { useEffect, useState } from "react";


export default function Home() {
  //short cut around webgl issue of not being able to render more than 4 canvas in chrome
  // const [isChromeOrSafari, setIsChromeOrSafari] = useState(false);

  // useEffect(() => {
  //   const userAgent = window.navigator.userAgent;
  //   const isChrome = /Chrome/.test(userAgent);
  //   const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  //   if (isChrome || isSafari) {
  //     setIsChromeOrSafari(true);
  //   }
  // }, []);

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
          {/* {!isChromeOrSafari && <StarsCanvas />} */}
          <StarsCanvas />
        </div>
        <div>game</div>
      </div>
    </div>
  )
}

