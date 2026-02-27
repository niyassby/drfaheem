import React from 'react'
import useAnimationEffects from '../Util/upAnimation';
import pattern from "../../assets/pattern.png"
function AboutHeader() {
  useAnimationEffects({
    upSelector: '.head',
    defaultUpAnimation: {
      opacity: 0,
      y: 40, 
    }
  });
  return (
    <div className='w-full relative'>
      <div className="absolute w-full h-full inset-0 bg-[linear-gradient(to_right,#f0f0f0,_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0,_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div style={{backgroundImage: `url(${pattern})`}} className={`absolute w-full h-full inset-0 opacity-15 bg-repeat bg-[size:60px_60px]`}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-backgr ound via-transparent to-background "></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-backg round "></div>
        <div className='max-w-[85rem] min-h-[300px] md:min-h-[400px] mx-auto flex flex-col items-center justify-center py-3 px-4'>
            <h1 className='text-xl font-medium text-main-color-600 mb-2 head'>About me</h1>
            <h1 className='head text-4xl font-bold text-secondary-600 '>Dr. Faheem Najeeb </h1>
            <h1 className='head text-muted-foreground '>Innovative Physician | Functional Medicine Specialist | Wellness Advocate </h1>
         
        </div>        
    </div>
  )
}

export default AboutHeader