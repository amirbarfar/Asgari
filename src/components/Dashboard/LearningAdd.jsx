import React from 'react'
import NavbarDashborad from './NavbarDashborad'
import { useState } from 'react';

export default function LearningAdd() {
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

  async function addPost(event)
  {

    const newLearning = {
      question  : name,
      link: LinkButton,
      answer: content
    }

    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/questions/create', {
        method: 'post',
        body: JSON.stringify(newLearning),
        credentials: "include",
        headers: {
          'Accept': 'application/json', 
          'Content-Type': "application/json"
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Post created successfully:', data.post);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
    
  }

  return (
    <div>
        <NavbarDashborad/>
        <form onSubmit={(event) => addPost(event)} encType='multypart/form-data' action="" className='font-bold absolute top-20 w-full p-5 max-sm:pl-14'>
        <div className='flex justify-center items-center gap-16 flex-wrap'>
          <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
            <label className='mr-2'>موضوع آموزش : </label>
            <input onChange={(event) => setName(event.target.value)} type="text" className='w-96 max-lg:w-full
             h-12 input bg-slate-100' />
          </div>
          <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
            <label className='mr-2'>آدرس دکمه : </label>
            <input onChange={(event) => setLinkButton(event.target.value)} type="text" className='w-96 max-lg:w-full
             h-12 input bg-slate-100'/>
          </div>
          <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
            <label className='mr-2'> تاریخ انتشار آموزش : </label>
            <div className='flex justify-center items-center bg-slate-100 rounded-xl max-lg:w-full'>
              <input id="inp" type="text" className='input bg-slate-100 w-96 h-12 max-lg:w-full' />
              <button type="button" onClick={clickHandler} className='w-20 h-12 bg-red-400 text-xs flex justify-center items-center rounded-tl-xl rounded-bl-xl'>تاریخ امروز</button>
            </div>
          </div>
          <div className='flex justify-start items-start flex-col gap-5 w-full px-16 max-lg:p-0'>
            <label className='mr-2'>توضیحات آموزش : </label>
            <textarea onChange={(event) => setContent(event.target.value)} className=' w-full h-44 input bg-slate-100' />
          </div>
        </div>
        {/* <Link to={"/dashboard"}> */}
          <button className='w-72 h-12 bg-blue-500 text-white mt-12 rounded-md mx-16 max-sm:mx-auto'>اضافه کردن آموزش</button>
        {/* </Link> */}
      </form>
    </div>
  )
}
