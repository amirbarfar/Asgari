import React from 'react'
import Animation from '../Animation'
import Navbar from '../Navbar'

export default function LearningMore() {
  return (
    <div>
        <Animation/>
        <Navbar/> 
        <div className='mx-auto flex justify-center items-center'>
          <input className='input-bordered text-start p-5 w-[60%] h-12 border-2 rounded-lg text-black bg-transparent' placeholder='چی میخوای پیدا کنی !' type="text" />

        </div>
    </div>
  )
}
