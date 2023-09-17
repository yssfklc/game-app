import React from 'react';
import user from './image/user.svg';

export default function Login() {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-gray-700 px-10 py-5 rounded-lg m-20'>
            <img src={user} className='mb-4'/>
            <form className='flex flex-col'>
                <label className='mb-1 text-xs font-thin text-gray-300'>User Name</label>
                <input className='mb-5 w-60 bg-gray-300  rounded-md h-8 ' />
                <label className='mb-1 text-xs font-thin text-gray-300'>Password</label>
                <input className='mb-5 bg-gray-300  rounded-md h-8'/>
                <button type='submit' className='bg-gray-800 py-2 px-4 rounded-md text-gray-100 inline '>Login</button>
            </form>
        </div>
    </div>
  )
}
