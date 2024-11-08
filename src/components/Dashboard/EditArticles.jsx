import React from 'react'
import { useState , useEffect } from 'react';
import NavbarDashborad from './NavbarDashborad';
import { useParams } from 'react-router-dom';
import {fetchData} from "../../lib/fetchData"

export default function EditArticles() {
    const [dateInp, setDateInp] = useState()
    const [name , setName] = useState('')
    const [discription , setDiscription] = useState('')
    const [image , setImage] = useState('')
    const [content , setContent] = useState('')

  function clickHandler() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dateResult = `${year}/${month}/${day}`
    document.querySelector("#inp").value = dateResult;
  }
  const {id} = useParams();
  const [imgSrc , setImgSrc] = useState("") 
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let postsResponse = await fetch(`http://127.0.0.1:8000/api/posts/${id}` , {
        credentials: "include",
        header: {
          Accept: "application/json"
        }
      });
      const postsData = await postsResponse.json();
      console.log(postsData.data)
      setName(postsData.data.title)
      setContent(postsData.data.content)
      setImgSrc(postsData.data.image)
      setDiscription(postsData.data.description)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
      const response = await fetch(`http://localhost:8000/api/posts/edit/${id}`, {
        method: 'POST',
        body: formData,
        credentials: "include",
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Post created successfully:', data.post);
        // Handle success (e.g., show a success message or navigate to a new page)
      } else {
        // Handle errors (e.g., validation errors)
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
    <form onSubmit={(event) => addPost(event)} encType='multipart/form-data' action="" className='font-bold absolute top-20 w-full p-20 max-sm:p-2'>
      <div className='flex justify-center items-center gap-16 flex-wrap'>
        <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
          <label className='mr-2'>ادیت نام مقاله</label>
          <input value={name} onChange={(event) => setName(event.target.value)} type="text" className='w-[275px] max-lg:w-[90%]
           h-12 input bg-slate-100' />
        </div>
        <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
          <label className='mr-2'>ادیت توضیحات کم مقاله</label>
          <input value={discription} onChange={(event) => setDiscription(event.target.value)} type="text" className='w-[275px] max-lg:w-[90%]
           h-12 input bg-slate-100'/>
        </div>
        <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
          <div class="w-1/2">
            <img src={imgSrc} alt="fdsfds" />
          </div>
          <label className='mr-2'>ادیت عکس مقاله</label>
          <input onChange={(event) => (setImage(event.target.value))} type="file" className='w-[275px] max-lg:w-[90%]
           h-12 bg-slate-100 file-input'/>
        </div>
        <div className='flex justify-start items-start flex-col gap-5 max-lg:w-full'>
          <label className='mr-2'> ادیت تاریخ انتشار مقاله : </label>
          <div className='flex justify-center items-center bg-slate-100 rounded-xl max-lg:w-[90%]'>
            <input id="inp" type="text" className='input bg-slate-100 max-lg:w-full h-12' />
            <button type="button" onClick={clickHandler} className='w-20 h-12 bg-red-400 text-xs flex justify-center items-center rounded-tl-xl rounded-bl-xl'>تاریخ امروز</button>
          </div>
        </div>
        <div className='flex justify-start items-start flex-col gap-5 w-full max-sm:pl-12'>
          <label className='mr-2'> ادیت توضیحات مفاله : </label>
          <textarea onChange={(event) => setContent(event.target.value)} className=' w-full h-44 input bg-slate-100' value={content}></textarea>
        </div>
      </div>
      <button className='w-[320px] h-12 bg-blue-500 text-white mt-12 rounded-md'>ادیت کردن مقاله</button>
    </form>
  </div>
  )
}
