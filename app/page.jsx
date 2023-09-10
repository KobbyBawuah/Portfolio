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
  //   console.log("1", isChrome)
  //   if (isChrome || isSafari) {
  //     setIsChromeOrSafari(true)
  //     console.log("2", isChromeOrSafari)
  //   }
  //   console.log("3", isChromeOrSafari)
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
        {/* <button
          type="button"
          onClick={() => {
            throw new Error("Sentry Frontend Error");
          }}
        >
          Throw error
        </button> */}
      </div>
    </div>
  )
}

