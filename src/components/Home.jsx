import React from 'react'
import Navbar from './Navbar'
import Animation from './Animation'
import Learning from './Learning/Learning'
import Articles from './Articles/Articles'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <Animation/>
        <Navbar />
        <div className='flex justify-between items-center max-xl:flex-col-reverse pb-10'>
          <div className='w-[60%] max-xl:w-full'>
            <h2 className='text-3xl mb-10 max-md:text-xl font-bold'>سـلـام بـریم شـبـکـه یـاد بـگـیـریـم :)</h2>
            <p className='text-lg font-boldV max-md:text-sm'>خــب، مــا ایــنــجــا قــصــد داریـــم بــا هــم، یــعــنــی کنـــار هــم، گـام‌ بـه‌ گـام مفــــــاهـیـم شبـــکـه رو یـاد بـگیــریـم و بـبـیـنـیـم اصـلـاً بـه چـه دردی مــیــخــوره! و هـمـیـن دیـگـه... بـزن بـریم ببیـنیـم این شبـکه شبـکه کـه مـیگن، چـیه!</p>
            <Link to={"/learning"}><button className='w-[50%] h-12 border-2 bg-primary text-white font-bold rounded-lg mt-10 hover:bg-white hover:text-black transition-all duration-150 max-sm:w-full'>خـب بـزن بـریـم آمـوزش هـارو بـبـیـنیـم</button></Link>
          </div>
           
          <img className='w-[40%] max-xl:w-full' src="./image/bg-header.png" alt="" />
        </div>
        <Learning/>
        <Animation/>
        <Articles/>
        <Footer/>
    </>
  )
}
