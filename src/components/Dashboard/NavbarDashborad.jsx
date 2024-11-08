import React, { useState , useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { fetchData } from '../../lib/fetchData'

export default function NavbarDashborad() {
    const [isOpen, setIsOpen] = useState(false)
        const [user, setUser] = useState('')

        const clickHandler = () => {
            setIsOpen(!isOpen)
        }

        async function getName()
        {
            let nameD = await fetchData("/auth/me");
            nameD = await nameD.json();

            setUser(nameD);
        }

    useEffect(()=> {
        getName();
    } , [])

    async function exitHandler() {
        await fetch('http://127.0.0.1:8000/api/auth/logout' , {
            credentials: "include",
            headers: {
              'Accept': 'application/json', 
              'Content-Type': "application/json"
            }
        })
    }


    return (
        <div className='w-full grid col-span-10'>
                <p>{ user.name }</p>
            <div className='flex justify-center items-center mt-4 w-12 h-12 rounded-lg mx-2 my-8' onClick={clickHandler}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6L20 6M4 10L20 10M8 14H20M4 18H20" stroke="black" stroke-width="2" stroke-linecap="round" />
                </svg>

            </div>
            {
                isOpen &&
                (
                    <div className='w-60 p-5 col-start-1 col-end-2 bg-slate-100 z-10 h-[450px] rounded-xl'>
                        <h2 className='font-bold text-3xl mt-5 text-center'>داشبورد</h2>
                        <ul className='flex justify-start items-start flex-col font-bold mt-10 gap-5'>
                            <li className='flex justify-center items-center w-full h-12'>
                                <NavLink end to={"/dashboard"} className={({ isActive }) => isActive ? "bg-blue-400  text-white rounded-md p-3 px-7 " : ""}>
                                    صفحه اصلی
                                </NavLink>
                            </li>
                            <li className='flex justify-center items-center w-full h-12'>
                                <NavLink end to={"/dashboard/articles"} className={({ isActive }) => isActive ? "bg-blue-400  text-white rounded-md p-3 px-7 " : ""}>
                                    اضافه کردن مقاله
                                </NavLink>
                            </li>
                            <li className='flex justify-center items-center w-full h-12'>
                                <NavLink end to={"/dashboard/learninges"} className={({ isActive }) => isActive ? "bg-blue-400  text-white rounded-md p-3 px-7" : ""}>
                                    اضافه کردن دوره
                                </NavLink>
                            </li>
                            <li className='pt-10 mx-auto' onClick={() => exitHandler()}>
                                <p className="w-full h-12 bg-red-500 text-white p-3 rounded-lg">
                                    خروج از حساب کاربری
                                </p>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
