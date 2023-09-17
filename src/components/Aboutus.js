import React from 'react';
import g18 from './image/g18.png';

function Aboutus() {
  return (
    <div className='grid grid-cols-12 grid-rows-6 gap-10'>
        <div className='col-start-2 col-span-10 row-start-1 row-span-1 flex items-center mt-20'>
            <div className='w-1/2 flex flex-col justify-center p-10'>
                <h1 className='text-gray-100 text-4xl mb-8 font-extrabold leading-relaxed	w-3/4 font-serif'>Work that we produce for our clients</h1>
                <p className='text-gray-100 mb-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <div>
                <a href='#' className='bg-red-800 py-2 px-4 rounded-2xl text-gray-100 inline bg-gradient-to-r from-red-600  to-orange-400'>Get More Details</a>

                </div>
            </div>
            <div className='w-1/2'>
                <img src={g18} alt='' className='rounded-lg'/>
            </div>
        </div>
        <div className='col-start-2 col-span-10 row-start-2 row-span-1'>
            <div className='my-5'>
                <h2>Why Work Wıth Us</h2>
            </div>
            <div className=''>
                <div className='w-1/4 bg-gray-300 py-5 px-2 flex flex-col justify-around items-start rounded-xl'>
                    <p>Lorem ipsum</p>
                    <h3 className='text-xl font-bold'>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus