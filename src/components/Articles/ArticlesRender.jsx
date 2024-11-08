import React, { useState } from 'react'
import { DataArticles } from './DataArticles'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Animation from '../Animation'

export default function ArticlesRender() {

    let [data] = useState(DataArticles)

    let id = useParams()
    console.log(data , id);
    

    let result = data.find((item)=>{
        return item.id === id.id    
    })
    
  return (
    <>
        <Navbar/>
        <Animation/>
        <div className='w-[70%] max-sm:w-full font-bold flex justify-center items-center flex-col mx-auto'>
            <img className='w-[40%] max-sm:w-full h-96 rounded-lg m-10' src={result.img} alt="" />
            <p className='w-[60%] max-sm:w-full leading-8'>{result.more}</p>
            <Animation/>
        </div>
        <Footer/>
    </>
  )
}
