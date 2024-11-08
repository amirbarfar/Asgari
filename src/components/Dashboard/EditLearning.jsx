import React from 'react'
import { useState } from 'react';
import NavbarDashborad from './NavbarDashborad';

export default function EditLearning() {
    const [dateInp, setDateInp] = useState()
    const [name , setName] = useState('')
    const [LinkButton , setLinkButton] = useState('')
    const [content , setContent] = useState('')

    function clickHandler() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const dateResult = `${year}/${month}/${day}`
        document.querySelector("#inp").value = dateResult;
    }
    return (
        <div>
            <div>
                <NavbarDashborad />
                <form encType='multypart/form-data' action="" className='font-bold absolute top-20 w-full p-5 max-sm:pl-14'>
                    <div className='flex justify-center items-center gap-16 flex-wrap'>
                        <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
                            <label className='mr-2'>ادیت نام آموزش</label>
                            <input onChange={(event) => setName(event.target.value)} type="text" className='w-96 max-lg:w-full
                                h-12 input bg-slate-100' />
                        </div>
                        <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
                            <label className='mr-2'> ادیت آدرس دکمه : </label>
                            <input onChange={(event) => setLinkButton(event.target.value)} type="text" className='w-96 max-lg:w-full
                                h-12 input bg-slate-100'/>
                        </div>
                        <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
                            <label className='mr-2'>  ادیت تاریخ انتشار آموزش : </label>
                            <div className='flex justify-center items-center bg-slate-100 rounded-xl max-lg:w-full'>
                                <input id="inp" type="text" className='input bg-slate-100 w-96 h-12 max-lg:w-full' />
                                <button type="button" onClick={clickHandler} className='w-20 h-12 bg-red-400 text-xs flex justify-center items-center rounded-tl-xl rounded-bl-xl'>تاریخ امروز</button>
                            </div>
                        </div>
                        <div className='flex justify-start items-start flex-col gap-5 w-full px-16 max-lg:p-0'>
                            <label className='mr-2'> ادیت توضیحات آموزش : </label>
                            <textarea onChange={(event) => setContent(event.target.value)} className=' w-full h-44 input bg-slate-100' />
                        </div>
                    </div>
                    <button className='w-72 h-12 bg-blue-500 text-white mt-12 rounded-md'>ادیت کردن آموزش</button>
                </form>
            </div>
        </div>
    )
}
