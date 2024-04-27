import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'; // To avoid tree shaking
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
// import tw from 'tailwindcss';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Box = ({ delay }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top bottom-=100', // Adjust as needed
        end: 'top top', // Adjust as needed
        scrub: 0.5,
        markers: true, // Remove this in production
      },
    });

    tl.from(boxRef.current, {
      opacity: 0,
      y: -80,
      delay,
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [delay]);

  return (
    <div
      ref={boxRef}
      className={`w-32 h-32 bg-blue-500 m-4`}
    ></div>
  );
};

const Contact = () => {
  return (
    <div className={`flex flex-wrap justify-center`}>
      <Box delay={0} />
      <Box delay={0.1} />
      <Box delay={0.2} />
      <Box delay={0.3} />
      <Box delay={0.4} />
    </div>
  );
};

export default Contact;
