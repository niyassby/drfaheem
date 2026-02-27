import React from 'react'
import useAnimationEffects from '../Util/upAnimation';

function WhoIAm({data}) {
    useAnimationEffects({
        upSelector: ".story",
        defaultUpAnimation: {
          opacity: 0,
          y: 70,
        },
      });
  return (
    <div>
        <div className='max-w-[85rem] mx-auto px-4 md:px-8 py-20 mt-20 border-b'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4 text-primary-700 story'>
                    {data.head}
                </h1>
                <p className='max-w-5xl text-lg mx-auto text-gray-600 story'>
                    {data.disc}
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhoIAm