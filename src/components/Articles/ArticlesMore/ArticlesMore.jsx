import React from 'react'
import { Link } from 'react-router-dom'
import DataArticles from '../DataArticles'
import ArticlesMoreBox from './ArticlesMoreBox'
import Navbar from '../../Navbar'
import Footer from '../../Footer'

export default function ArticlesMore() {
  return (
    <>
      <Navbar />
      <div className='mt-24' id='articles'>
        <div className='flex justify-center flex-wrap my-10 items-center gap-20 font-bold'>
          {
            DataArticles.map((item) =>
              <Link to={`/articles/${item.id}`}>
                <ArticlesMoreBox {...item} key={item.id} />
              </Link>
            )
          }
        </div>
      </div>
      <Footer/>

    </>
  )
}
