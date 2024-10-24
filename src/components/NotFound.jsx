import React from 'react'
import Navbar from './Navbar'

export default function NotFound() {
  return (
    <div className=''>
      <Navbar />
      <p className='font-bold text-6xl flex justify-center items-center my-52 max-sm:text-3xl'>صفحه مورد نظر پیدا نشد :(</p>
      <footer className="footer footer-center bg-base-100 text-base-content py-2  absolute bottom-0">
        <aside>
          <p>.Copyright © {new Date().getFullYear()} - All right reserved by Amir Barfar </p>
        </aside>
      </footer>
    </div>
  )
}
