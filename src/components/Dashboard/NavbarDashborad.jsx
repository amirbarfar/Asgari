import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarDashborad() {
    return (
        <div className='w-full grid col-span-10'>
            <div className=' w-60 p-5 col-start-1 col-end-2'>
                <h2 className='font-bold text-3xl mt-5 text-center'>داشبورد</h2>
                <ul className='flex justify-start items-start flex-col font-bold mt-10 gap-5'>
                    <li className='flex justify-center items-center w-full h-12'>
                        <NavLink to={"/dashboard//"} className={({ isActive }) => isActive ? "bg-blue-400  text-white rounded-md p-3 px-7 " : ""}>
                            صفحه اصلی
                        </NavLink>
                    </li>
                    <li className='flex justify-center items-center w-full h-12'>
                        <NavLink to={"/dashboard/articles"} className={({ isActive }) => isActive ? "bg-blue-400  text-white rounded-md p-3 px-7 " : ""}>
                            اضافه کردن مقاله
                        </NavLink>
                    </li>
                    <li className='flex justify-center items-center w-full h-12'>
                        <NavLink to={"/dashboard/learninges"} className={({ isActive }) => isActive ? "bg-blue-400  text-white rounded-md p-3 px-7" : ""}>
                            اضافه کردن دوره
                        </NavLink>
                    </li>
                    <li className='pt-10 mx-auto'>
                        <a href='' className="w-full h-12 bg-red-500 text-white p-3 rounded-lg">
                            خروج از حساب کاربری
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center items-start gap-5 mt-5 col-start-9 col-end-10'>
                    <div className='font-bold flex justify-center items-start flex-col'>
                        <h2>امیر برفر</h2>
                        <p>ادمین</p>
                    </div>
                    <img src="./image/1.png" alt="userImage" className='w-16 h-16 rounded-full' />
            </div>
        </div>
    )
}
