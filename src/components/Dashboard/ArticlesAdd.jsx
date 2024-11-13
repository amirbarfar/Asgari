import React, { useState } from 'react'
import NavbarDashborad from './NavbarDashborad'
import  { useNavigate } from 'react-router-dom'

export default function ArticlesAdd() {
  const [name , setName] = useState('')
  const [discription , setDiscription] = useState('')
  const [image , setImage] = useState()
  const [content , setContent] = useState('')
  
  const navigate = useNavigate();

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

    event.preventDefault();
    
    const formData = new FormData();
    formData.append('title', name);
    formData.append('description', discription);
    formData.append('image', image);
    formData.append('content', content);


    try {
      const response = await fetch('http://localhost:8000/api/posts/create', {
        method: 'POST',
        body: formData,
        credentials: "include",
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        return navigate('/dashboard')
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };


  return (
    <div>
      <NavbarDashborad />
      <form onSubmit={(event)=> addPost(event)} encType='multipart/form-data' action="" className='font-bold absolute top-20 w-full p-20 max-sm:p-2'>
        <div className='flex justify-center items-center gap-16 flex-wrap'>
          <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
            <label className='mr-2'>نام مقاله : </label>
            <input onChange={(event) => setName(event.target.value)} type="text" className='w-[275px] max-lg:w-[90%]
             h-12 input bg-slate-100' />
          </div>
          <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
            <label className='mr-2'>توضیح کوتاه مقاله : </label>
            <input onChange={(event) => setDiscription(event.target.value)} type="text" className='w-[275px] max-lg:w-[90%]
             h-12 input bg-slate-100'/>
          </div>
          <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
            <label className='mr-2'>عکس مقاله</label>
            <input type="file" onChange={(event) => (setImage(event.target.files[0]))} className='w-[275px] max-lg:w-[90%]
             h-12 bg-slate-100 file-input'/>
          </div>
          <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
            <label className='mr-2'> تاریخ انتشار مقاله : </label>
            <div className='flex justify-center items-center bg-slate-100 rounded-xl max-lg:w-[90%]'>
              <input id="inp" type="text" className='input bg-slate-100 max-lg:w-full h-12' />
              <button type="button" onClick={clickHandler} className='w-20 h-12 bg-red-400 text-xs flex justify-center items-center rounded-tl-xl rounded-bl-xl'>تاریخ امروز</button>
            </div>
          </div>
          <div className='flex justify-start items-start flex-col gap-5 w-full px-8 max-lg:p-0 max-sm:pl-12'>
            <label className='mr-2'>توضیحات مفاله : </label>
            <textarea onChange={(event) => setContent(event.target.value)} className=' w-full h-44 input bg-slate-100' />
          </div>
        </div>
          <button type='submit' className='w-[320px] h-12 bg-blue-500 text-white mt-12 rounded-md mx-8 max-sm:mx-auto'>اضافه کردن مقاله</button>  
      </form>
    </div>
  )
}
