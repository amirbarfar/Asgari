import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <div className=''>
        <Navbar/>
            <p className='font-bold text-6xl flex justify-center items-center my-52'>صفحه مورد نظر پیدا نشد :(</p>
        <Footer/>
    </div>
  )
}
