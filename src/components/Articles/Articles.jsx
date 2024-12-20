import React from 'react'
import { DataArticles } from './DataArticles'
import ArticlesBox from './ArticlesBox'
import { Link } from 'react-router-dom'

export default function Articles() {
  return (
    <div className='mt-24' id='articles'>
      <div className='flex justify-between items-center font-bold mx-2 my-12'>
        <h2 className='text-xl max-sm:text-base'>بـخـش مقالات</h2>
        <Link to={"articles"} className='w-44 h-12 bg-primary flex justify-center items-center text-white rounded-lg max-sm:text-sm max-sm:w-28 max-sm:h-8'>بازم مقاله هستا :)</Link>
      </div>
      <div className='flex justify-center gap-x-5 flex-wrap gap-y-10 items-center font-bold max-lg:justify-start'>
        {
          DataArticles.map((item) =>
            <Link to={`/articles/${item.id}`}>
              {item.id <= 3  &&
                <ArticlesBox {...item} key={item.id}/>
              }
            </Link>
          )
        }
      </div>
    </div>
  )
}
