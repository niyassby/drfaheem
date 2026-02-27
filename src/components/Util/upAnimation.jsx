import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useAnimationEffects = (options = {}) => {
    useEffect(() => {
      const {
        upSelector = '.mil-up',
        scaleSelector = '.mil-scale',
        defaultUpAnimation = {
          opacity: 0,
          y: 40,
          scale: 0.98,
          ease: 'sine',
        },
        defaultUpTo = {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
        },
        defaultScaleFrom = 1,
        defaultScaleTo = 1.1
      } = options;
  
      // Animation for up elements
      const appearance = document.querySelectorAll(upSelector);
      
      const upAnimations = Array.from(appearance).map((section) => {
        return gsap.fromTo(section, defaultUpAnimation, {
          ...defaultUpTo,
          scrollTrigger: {
            trigger: section,
            toggleActions: 'play none none reverse',
          }
        });
      });
  
      // Animation for scale elements
      const scaleImage = document.querySelectorAll(scaleSelector);
      
      const scaleAnimations = Array.from(scaleImage).map((section) => {
        const value1 = section.dataset.value1 || defaultScaleFrom;
        const value2 = section.dataset.value2 || defaultScaleTo;
        
        return gsap.fromTo(section, {
          ease: 'sine',
          scale: value1,
        }, {
          scale: value2,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: 'play none none reverse',
          }
        });
      });
  
      return () => {
        upAnimations.forEach(anim => anim.kill());
        scaleAnimations.forEach(anim => anim.kill());
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, [options]);
  };

export default useAnimationEffects;