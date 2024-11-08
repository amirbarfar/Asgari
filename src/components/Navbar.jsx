import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { fetchData } from "../lib/fetchData";
import Cookies from 'js-cookie';

export default function Navbar() {
    const [user, setUser] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    async function getName() {
        console.log("before fetch")
        let nameD = await fetch('http://localhost:8000/api/auth/me', {
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json"
            }
        });
        console.log("after fetch")
        if (nameD.ok) {
            setIsLogin(true);
            
            nameD = await nameD.json();
            console.log(nameD)
            setUser(nameD);
            return true;
        }
        setIsLogin(false);
        return false;
    }

    useEffect(() => {
        getName()
    }, [])

    return (
        <>
            <div className='font-bold flex justify-between items-center'>
                <div className='max-md:dropdown flex justify-center items-center max-md:w-full'>
                    <div className='flex justify-center items-center max-md:justify-between'>
                        <div className="hidden max-md:block">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></div>
                        </div>
                        <div>
                            <img className='w-36 h-36 max-lg:w-32 max-md:h-32' src="../image/logo.png" alt="logo" />
                        </div>
                    </div>
                    <ul className="max-md:menu dropdown-content flex justify-start items-center gap-5 max-md:flex-col max-md:p-5 max-md:mt-10 max-md:text-black max-md:bg-slate-100 z-20 max-md:w-44 max-md:rounded-lg">
                        <Link to={"/"}>
                            <li>خانه</li>
                        </Link>
                        <Link to={"/learning"}>
                            <li>آموزش ها</li>
                        </Link>
                        <Link to='/articles'>
                            <li>مقالات</li>
                        </Link>
                        <li><a href='https://t.me/im_emir12'>راه ارتباطی با من</a></li>
                        <Link to="/register">
                            <button className='max-md:block hidden'>ثبت نام</button>
                        </Link>
                        <Link to="login">
                            <button className='max-md:block hidden'>ورود</button>
                        </Link>
                    </ul>
                </div>
                {
                    isLogin ? (
                        <p>{user.name}</p>
                    ) : (
                        <div className='flex justify-center items-center gap-2 max-sm:hidden'>
                            <Link to={"/register"}><button className='w-24 h-12 btn max-md:hidden block'>ثبت نام</button></Link>
                            <Link to={"/login"}><button className='w-24 h-12 btn max-md:hidden block'>ورود</button></Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}
