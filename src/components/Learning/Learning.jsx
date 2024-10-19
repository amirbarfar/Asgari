import React from 'react'
import Data from './Data'
import LearningBox from './LearningBox'
import Animation from '../Animation'

export default function Learning() {
  return (
    <div className='flex justify-center items-center gap-10 max-lg:justify-start py-10 overflow-x-scroll'>
      <Animation/>
        {
          Data.map((item)=>
            <LearningBox {...item} key={item.id}/>
          )
        }
    </div>
  )
}
