import React from 'react'
import logo from './image/logo.svg';
import i3 from './image/i3.svg';
import i4 from './image/i4.svg';
import i5 from './image/i5.svg';
import i6 from './image/i6.svg';



function Footer() {
  return (
    <div className='bg-gray-200 px-10 py-5 mt-10 mx-auto px-auto'>
        <div className='flex border-4 border-b-gray-500 justify-evenly'>
            <div className='w-1/4 flex flex-col justify-center items-start px-5'>
                <img src={logo} alt='' className='w-10' />
                <br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> <br/> @Lorem</p>
            </div>
            <div className='flex flex-col py-10 px-10'>
                <a href='#'>About Us</a>
                <br/>
                <a href='#'>Careers</a>
                <a href='#'>Contact Us</a>
            </div>
            <div className='w-1/4 flex flex-col justify-center items-start py-10 px-10'>
                <a href=''>Contact Us</a>
                <br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> <br/> +908 89097 890</p>
            </div>
            <div className='flex items-center'>
                <a href='#'><img src={i3} alt='' /></a>
                <a href='#'><img src={i4} alt='' /></a>
                <a href='#'><img src={i5} alt='' /></a>
                <a href='#'><img src={i6} alt='' /></a>

            </div>
        </div>
        <hr/>
        <div className='flex justify-center pt-5'>
            <p>Copyright ® 2022 prodesigner All rights Rcerved</p>
        </div>
    </div>
  )
}

export default Footer