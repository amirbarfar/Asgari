import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='font-bold flex justify-between items-center'>
            <div className='flex justify-start items-center'>
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg></div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? "text-blue-700" : '')}>
                            خانه
                        </NavLink>
                        <NavLink to={'/learning'} className={({ isActive }) => (isActive ? "text-blue-700" : '')}>
                            آموزش ها
                        </NavLink>
                        <NavLink to={'/exam'} className={({ isActive }) => (isActive ? "text-blue-700" : '')}>
                            آزمون ها
                        </NavLink>
                        <a href="">
                            <li>مقالات</li>
                        </a>
                        <a href="">
                            <li>درباره ما</li>
                        </a>
                    </ul>
                </div>
            </div>
            <img className='w-36 h-36 max-md:w-32 max-md:h-32' src="./image/logo.png" alt="logo" />
            <button className="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg"    className="h-6 w-6"    fill="none"    viewBox="0 0 24 24"    stroke="currentColor">    <path        strokeLinecap="round"        strokeLinejoin="round"        strokeWidth="2"        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
        </div>
    )
}
