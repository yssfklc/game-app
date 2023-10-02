import React from 'react';
import g18 from './image/g18.png';
import g19 from './image/g19.png';
import i7 from './image/i7.png';
import i8 from './image/i8.png';
import i9 from './image/i9.png';
import i10 from './image/i10.png';

function Aboutus() {
    const employees=[[i7, 'John peter', 'COO'],[i8, 'John peter', 'COO'],[i9, 'John peter', 'COO'],[i10, 'John peter', 'COO']]
  return (
    <div className='grid grid-cols-12 grid-rows-4 gap-10 max-lg:flex max-lg:flex-col max-lg:justify-center'>
        <div className='col-start-2 col-span-10 row-start-1 row-span-1 flex items-center mt-20 max-lg:flex max-lg:flex-col max-lg:justify-center '>
            <div className='w-1/2 flex flex-col justify-center p-10 max-lg:w-full max-lg:z-10'>
                <h1 className='text-gray-100 text-4xl mb-8 font-extrabold leading-relaxed	w-3/4 font-serif'>Work that we produce for our clients</h1>
                <p className='text-gray-100 mb-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <div>
                <a href='#' className='bg-red-800 py-2 px-4 rounded-2xl text-gray-100 inline bg-gradient-to-r from-red-600  to-orange-400'>Get More Details</a>

                </div>
            </div>
            <div className='w-1/2 max-lg:absolute max-lg:top-10 max-lg:z-0 max-lg:opacity-50 max-lg:w-full max-lg:object-cover max-lg:hidden'>
                <img src={g18} alt='' className='rounded-lg h-screen'/>
            </div>
        </div>
        <div className='col-start-2 col-span-10 row-start-2 row-span-1 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:z-10'>
            <div className='text-gray-100 mt-20 mb-20 font-extrabold text-xl leading-8 tracking-wider max-lg:flex max-lg:justify-center'>
                <h2>Why Work Wıth Us</h2>
            </div>
            <div className='flex justify-between max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center '>
                <div className='w-96 bg-gray-100 py-10 h-80 px-10 flex flex-col justify-around items-start rounded-xl max-lg:mb-5'>
                    <p className='bg-pink-100 rounded-sm px-3 py-1'>Lorem ipsum</p>
                    <h3 className='text-xl font-bold'>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className='w-96 bg-gray-100 py-10 h-80 px-10 flex flex-col justify-around items-start rounded-xl max-lg:mb-5'>
                    <p className='bg-orange-100 rounded-sm px-3 py-1'>Lorem ipsum</p>
                    <h3 className='text-xl font-bold'>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className='w-96 bg-gray-100 py-10 h-80 px-10 flex flex-col justify-around items-start rounded-xl max-lg:mb-5'>
                    <p className='bg-green-100 rounded-sm px-3 py-1'>Lorem ipsum</p>
                    <h3 className='text-xl font-bold'>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </div>
        </div>
        <div className='col-start-1 col-span-12 row-start-3 row-span-1 bg-gray-100'>
            
        </div>
        <div className='col-start-2 col-span-10 row-start-3 row-span-1 flex max-lg:flex max-lg:flex-col max-lg:justify-center'>
            <div className='w-1/2 flex items-end justify-start max-lg:w-3/4 max-lg:justify-center max-lg:items-center'>
                <img src={g19} alt=''/>
            </div>
            <div className='w-1/2 flex flex-col justify-end items-start p-10 max-lg:w-full max-lg:justify-center'>
                <p className='text-gray-800 mb-20 font-bold max-lg:text-gray-400'>Lorem Ipsum</p>
                <h1 className='text-gray-800 text-4xl mb-8 font-extrabold leading-relaxed	w-3/4 font-serif max-lg:text-gray-400'>Work that we produce for our clients</h1>
                <p className='text-gray-800 mb-20 max-lg:text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p> 
            </div>
        </div>
        <div className='col-start-2 col-span-10 row-start-4 row-span-1 max-lg:flex max-lg:flex-col max-sm:justify-center items-center'>
            <p className='font-bold my-20 text-gray-100 text-xl'>Our Team</p>
            <div className='flex justify-center items-center mb-20 max-lg:flex-wrap '>
                {employees.map((employee)=>{
                    return (<div className='w-1/4 bg-gray-800 mr-5 py-10 px-5 rounded-xl h-70 flex flex-col items-center justify-center max-lg:w-1/2 max-lg:mb-5'>
                        <img src={employee[0]}/>
                        <p className='text-gray-100'>{employee[1]}</p>
                        <p className='text-gray-100'>{employee[2]}</p>
                    </div>)

                })}
            </div>
            <div className='w-1/2  mb-10 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center'>
                <h3 className='text-gray-100 text-lg font-bold mb-3'>Lorem Ipsum</h3>
                <p className='text-gray-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='bg-gray-200 rounded-lg py-10 px-5 flex justify-between items-center max-lg:block'>
                <div className='w-1/2 max-lg:w-full max-lg:mb-5'>
                  <h3 className='text-black text-xl font-extrabold mb-3 leading-7 tracking-wider'>Lorem Ipsum</h3>
                  <p className='text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='flex rounded-lg px-3 py-2 bg-gray-800 items-center justify-center'>
                  <input className='bg-gray-800 mr-2 text-gray-100 font-light' placeholder='Type Your Email'/>
                  <button type='submit' className='bg-red-800 py-1 px-3 rounded-lg text-gray-800 inline-flex justify-center'>Continue</button>
                </div>
              </div>
        </div>
             

    </div>
  )
}

export default Aboutus