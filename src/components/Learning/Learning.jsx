import React from 'react'
import Data from './Data'
import LearningBox from './LearningBox'
import Animation from '../Animation'
import { Link } from 'react-router-dom'

export default function Learning() {
  return (
    <>
      <div className='flex justify-between items-center font-bold mx-2 mt-24'>
      <h2 className='text-xl max-sm:text-base'>بـخـش آمــوزش</h2>
      <Link to={"learningmore"} className='w-36 h-10 bg-blue-600 flex justify-center items-center text-white rounded-lg max-sm:text-sm max-sm:w-20 max-sm:h-8'>بیشتر</Link>
    </div>
      <div className='flex justify-center items-center gap-10 max-xl:justify-start py-10 overflow-x-scroll'>
        <Animation/>
          {
            Data.map((item)=>
              <LearningBox {...item} key={item.id}/>
            )
          }
      </div>
    </>
  )
}
