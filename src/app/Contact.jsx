import ContactForm from '@/components/Contact/ContactForm'
import useAnimationEffects from '@/components/Util/upAnimation';
import React from 'react'

function Contact() {
  useAnimationEffects({
    upSelector: '.contact',
    defaultUpAnimation: {
      opacity: 0,
      y: 50,
    }
  });
  return (
    <div>
        <div className='w-full h-[40vh] bg-gray-100 relative'>
            <img src="https://img.freepik.com/premium-photo/cup-tea-with-milk-spices_78677-6766.jpg?w=996" className='w-full absolute h-full object-cover' alt="" />
            <div className='relative w-full h-full  flex flex-col items-center justify-center pt-40'>
              <h1 className='text-4xl font-bold text-main-color-600 contact'>Connect Us</h1>
              <p className='text-gray-600 contact'>Whatever your goal - we will get you there.</p>
            </div>
          </div>
          <div className='w-full flex flex-col  '>
            <ContactForm/>
          </div>
    </div>
  )
}

export default Contact