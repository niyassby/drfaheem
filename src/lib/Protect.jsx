import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useLocation } from 'react-router-dom';

// Register the plugin
gsap.registerPlugin(ScrollSmoother);

function Protect({ children }) {
  const smoother = useRef();
  const content = useRef();
  const location = useLocation();

  // useEffect(() => {
  //   // Initialize ScrollSmoother
  //   smoother.current = ScrollSmoother.create({
  //     smooth: 2,
  //     effects: true,
  //     smoothTouch: 0.5,
  //   });

  //   return () => {
  //     if (smoother.current) {
  //       smoother.current.kill();
  //     }
  //   };
  // }, []);

  useEffect(() => {
    // Scroll to top when route changes
    // if (smoother.current) {
    //   smoother.current.scrollTo(0, true); // true means it should animate the scroll
    // }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]); // Trigger effect when pathname changes

  return (
    <div id="smooth-wrapper" ref={content}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}

export default Protect;