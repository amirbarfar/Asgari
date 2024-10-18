import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
      <Navbar />
      <div className='flex justify-between items-center max-xl:flex-col-reverse pb-10'>
        <div className='w-[50%] max-xl:w-full font-bold'>
          <h2 className='text-3xl mb-12 max-md:text-2xl'>بـــریــم شــبــــکــــه یــــاد بــگــیــریــــــــم!</h2>
          <p className='text-xl mb-3 max-md:text-lg'>خــب اصـلـا تـعـریـف شـبـکـه چـیـه ؟</p>
          <p className='text-base max-md:text-sm'>شــــبکه به طور کلی یعنی اگه ما دو یا چند دستــــــگاه رو به هم وصــــل کنیم و این دستــــــگاه‌ها به هم اطــــلاعات ارســــال و دریــــافت کنن یا همون رد و بــــدل کنن، به این میگن شــــبکه. حالا که فهمیدیم شــــبکه چیه، بریم بیشتر باهاش آشنا شیم :)</p>
        </div>
        <img className='w-[50%] max-xl:w-full' src="./image/bg-header.png" alt="" />
      </div>
    </>
  )
}
