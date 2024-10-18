import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import DataExamPassive from './Passive/DataExamPassive'
import BoxExamPassive from './Passive/BoxExamPassive'

export default function ExamIndex() {
  return (
    <>
        <div>
            <Navbar/>
            <h1 className='text-3xl mb-10 font-bold max-sm:text-center max-sm:text-xl'>آزمـــون تـــجـــــهـیـزات پـسـیـــو (Passive)</h1>
            <div className='flex justify-start items-center gap-10 flex-wrap max-sm:flex-col max-sm:justify-center max-sm:pb-5'>
                {
                DataExamPassive.map((item)=>
                    <Link to={item.id}>  
                        <BoxExamPassive {...item} key={item.id} />
                    </Link>
                )
                }
            </div>
        </div>
            <h1 className='text-3xl pt-10 font-bold max-sm:text-center max-sm:text-xl'>آزمـــون تـــجـــــهـیـزات اکـــتـــیـــو (Active)</h1>
        <div>
            <p className='text-center font-bold text-2xl py-10'>بـــه زودی قـــســـمـــت تــجـهـــیـزات اکــتـــیـــو اضــافــــه خواهـــد شــــد.</p>
        </div>
    </>
  )
}
