import React from 'react'
import Data from './Data'
import LearningBox from './LearningBox'
import Animation from '../Animation'

export default function Learning() {
  return (
    <div className='flex justify-center items-start gap-10 py-10'>
      <Animation/>
        {
          Data.map((item)=>
            <LearningBox {...item} key={item.id}/>
          )
        }
    </div>
  )
}
