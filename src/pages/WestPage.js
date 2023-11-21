import About from '../components/About';

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

function WestPage () {
    const main = useRef()
  
    useLayoutEffect(() => {
      const ctx = gsap.context((self) => {
        const boxes = self.selector('.box')
        boxes.forEach((box) => {
          gsap.fromTo(box, {y: 44, opacity: 0}, {y: 0, opacity: 1, duration: .5, scrollTrigger: {
            trigger: box,
          }})
        });
      }, main)
  
      return () => ctx.revert()
    }, [])
  
  
    return (
      <main ref={main}>
        <About/>
        <h1 className='box'>West Page!!!!</h1>
      </main>
    );
  }
  
  export default WestPage