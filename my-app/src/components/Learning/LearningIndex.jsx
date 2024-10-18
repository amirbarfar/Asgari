import React from 'react'
import Navbar from '../Navbar'
import BoxLearn from './Passive/BoxLearnPassive'
import DataLearn from './Passive/DataLearnPassive'
import { Link } from 'react-router-dom'

export default function Learning() {
  return (
    <>
        <div>
            <Navbar/>
            <h1 className='text-3xl mb-10 font-bold max-sm:text-center max-sm:text-xl'>تـــجـــــهـیـزات پـسـیـــو (Passive)</h1>
            <div className='flex justify-start items-center gap-10 flex-wrap max-sm:flex-col max-sm:justify-center max-sm:pb-5'>
                {
                DataLearn.map((item)=>
                    <Link to={`/learning/${item.id}`}>  
                        <BoxLearn {...item} key={item.id} />
                    </Link>
                )
                }
            </div>
        </div>
            <h1 className='text-3xl pt-10 font-bold max-sm:text-center max-sm:text-xl'>تـــجـــــهـیـزات اکـــتـــیـــو (Active)</h1>
        <div>
            <p className='text-center font-bold text-2xl py-10'>بـــه زودی قـــســـمـــت تــجـهـــیـزات اکــتـــیـــو اضــافــــه خواهـــد شــــد.</p>
        </div>
    </>
  )
}