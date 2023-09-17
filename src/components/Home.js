import React from 'react';
import game_svg from './image/game_svg.svg';
import g1 from './image/g1.png';
import g2 from './image/g2.png';
import g3 from './image/g3.png';
import g4 from './image/g4.png';
import g5 from './image/g5.png';
import g6 from './image/g6.png';
import g7 from './image/g7.png';
import g8 from './image/g8.png';
import g9 from './image/g9.png';
import g10 from './image/g10.png';
import g11 from './image/g11.png';
import g12 from './image/g12.png';
import g13 from './image/g13.png';
import g14 from './image/g14.png';
import g15 from './image/g15.png';
import g16 from './image/g16.png';
import g17 from './image/g17.png';
import i1 from './image/i1.svg';
import i2 from './image/i2.svg';
import s2 from './image/s2.svg';
import './Components.css';


function Home() {
const imgarr=[];
imgarr.push(g1, g2, g3, g4)
console.log(imgarr);
  return (
    <div className='grid grid-cols-12 grid-row-6 gap-10' >
        <div className='container-1 col-start-5 col-span-4 row-start-1 row-span-1' >
        </div>
        <div className='col-start-3 col-span-4 row-start-1 row-span-1 flex flex-col justify-center'>
            <p className='text-orange-400 font-bold mb-8'>Proved By prodesigner</p>
            <h1 className='text-gray-100 text-4xl mb-8 font-extrabold leading-relaxed	w-3/4 font-serif'>Work that we produce for our clients</h1>
            <p className='text-gray-100 mb-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <div>
              <a href='#' className='bg-red-800 py-2 px-4 rounded-2xl text-gray-100 inline bg-gradient-to-r from-red-600  to-orange-400'>Get More Details</a>

            </div>
        </div>
        <div className='col-start-3 col-span-8 row-start-2 row-span-1'>
          <div className=''>
            <div className='flex justify-between mb-10'>
              <h2 className='text-gray-100 text-2xl font-bold'>Currently Trending Games</h2>
              <a href='#' className='bg-gray-800/100 py-1 px-2 rounded-lg text-gray-100 inline-flex justify-center'>See All</a>
            </div>
            <div className='flex justify-between'>
              {imgarr.map((img)=>{
                return(
                <div className='mr-4'>
                  <img src={img} alt='' className=''/>
                  <p className='text-gray-100 font-bold text-lg px-2 py-4'><img src={i1} alt='icon' className='w-3 inline'/> 40 Followers</p>
                </div>
                )
              })}
              
            </div>
          </div>
        </div>
        <div className='col-start-3 col-span-8 row-start-3 row-span-1'>
          <div className='flex justify-center items-center my-40 '>
            <h3 className='text-gray-100 text-2xl font-bold w-1/2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
          </div>
          <div className='w-1/2'>
            <h3 className='text-gray-100 text-lg font-bold mb-3'>Lorem Ipsum</h3>
            <p className='text-gray-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>  
        <div className='col-start-3 col-span-8 row-start-4 row-span-1'>
          <div className='mt-20'>
            <img src={g5} alt='call-duty-banner' className=''/>
          </div>
        </div>
        <div className='col-start-3 col-span-8 row-start-4 row-span-2'>
          <div className='flex justify-end mr-10'>
            <img src={s2} alt=''/>
          </div>
        </div>
        <div className='col-start-1 col-span-12 row-start-5 row-span-1'>
              <img src={g6} alt=''className='m-0 w-full object-cover'/>
        </div>
        <div className='col-start-3 col-span-8 row-start-5 row-span-1'>
              <div className='flex flex-col justify-center items-center my-40'>
                <h3 className='text-gray-100 text-2xl text-center tracking-wider mb-8 font-extrabold leading-relaxed	w-3/4 font-serif'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                <p className='text-gray-100 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
              <div className='flex flex-wrap justify-center'>
                <div className='flex flex-col justify-center items-center m-5'>
                  <img src={g12} alt=''/>
                  <p className='text-gray-100 my-5'>Mobile Game Development</p>
                  <a href='#'>
                    <img src={i2} alt=''/>
                  </a>
                </div>
                <div className='flex flex-col justify-center items-center m-5'>
                  <img src={g13} alt=''/>
                  <p className='text-gray-100 my-5'>Mobile Game Development</p>
                  <a href='#'>
                    <img src={i2} alt=''/>
                  </a>
                </div>
                <div className='flex flex-col justify-center items-center m-5'>
                  <img src={g14} alt=''/>
                  <p className='text-gray-100 my-5'>Mobile Game Development</p>
                  <a href='#'>
                    <img src={i2} alt=''/>
                  </a>
                </div>
                <div className='flex flex-col justify-center items-center m-5'>
                  <img src={g15} alt=''/>
                  <p className='text-gray-100 my-5'>Mobile Game Development</p>
                  <a href='#'>
                    <img src={i2} alt=''/>
                  </a>
                </div>
                <div className='flex flex-col justify-center items-center m-5'>
                  <img src={g16} alt=''/>
                  <p className='text-gray-100 my-5'>Mobile Game Development</p>
                  <a href='#'>
                    <img src={i2} alt=''/>
                  </a>
                </div>
              </div>
        </div>
        <div className='col-start-3 col-span-8 row-start-6 row-span-1'>
              <div className='mb-20'>
                <div className='flex flex-col justify-center items-center my-20'>
                  <h3 className='text-gray-100 text-lg font-bold mb-3'>Our Recent Projects</h3>
                  <p className='text-gray-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='flex flex-wrap justify-center'>
                  <img src={g7} alt='' className='w-80 mx-1 my-1'/>
                  <img src={g8} alt='' className='mx-1 my-1'/>
                  <img src={g10} alt='' className='mx-1 my-1'/>
                  <img src={g9} alt='' className='mx-1 my-1'/>
                  <img src={g11} alt='' className='mx-1 my-1'/>
                </div>
                <div className='flex justify-center items-center my-5'>
                    <a href='#' className='bg-gray-800/100 py-1 px-5 rounded-lg text-gray-100 inline-flex justify-center'>See All</a>
                </div>
              </div>
              <div className='w-1/2  mb-10'>
                <h3 className='text-gray-100 text-lg font-bold mb-3'>Lorem Ipsum</h3>
                <p className='text-gray-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='bg-gray-100 rounded-lg py-10 px-5 flex justify-between items-center'>
                <div className='w-1/2'>
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

export default Home