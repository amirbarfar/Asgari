import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className='font-bold flex justify-between items-center'>
                <div className='max-md:dropdown'>
                    <div class="hidden max-md:block">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg></div>
                    </div>
                        <ul class="max-md:menu dropdown-content flex justify-start items-center gap-5 max-md:flex-col max-md:p-5 max-md:mt-10 max-md:bg-[#2563eb] max-md:text-white z-20 max-md:w-44 max-md:rounded-lg">
                            <a href="">
                                <li>خانه</li>
                            </a>                                
                            <a href="">
                                <li>آموزش ها</li>
                            </a>
                            <a href="">
                                <li>آزمون ها</li>
                            </a>
                            <a href="">
                                <li>مقالات</li>
                            </a>
                            <a href="">
                                <li>تماس با ما</li>
                            </a>
                        </ul>
                </div>
                <img className='w-36 h-36 max-lg:w-32 max-md:h-32' src="../image/logo.png" alt="logo" />
            </div>
        </>
    )
}
