'use client';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Education, Works, StarsCanvas } from "../components";

import React, { useEffect, useState } from "react";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 840px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
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
          <Hero isMobile={isMobile} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          {console.log("from the skies->", isMobile)}
          <Contact isMobile={isMobile} />
          {/* {!isChromeOrSafari && <StarsCanvas />} */}
          {!isMobile && <StarsCanvas />}
        </div>
        {/* <div>game</div> */}
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

