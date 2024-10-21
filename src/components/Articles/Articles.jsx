import React from 'react'
import {DataArticles} from './Data'
import ArticlesBox from './ArticlesBox'
import Animation from '../Animation'

export default function Articles() {
  return (
    <div className='mt-24'>
        <h2 className='text-xl font-bold'>بـخـش مـقـالـات</h2>
        <div className='flex justify-center flex-wrap my-10 items-center gap-20 font-bold'>
          <Animation/>
          {
            DataArticles.map((item)=>
              <ArticlesBox {...item} key={item.id}/>
            )
          }
        </div>
    </div>
  )
}
