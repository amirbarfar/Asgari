import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import LearningMore from './components/Learning/LearningMore/LearningMore'
import Articles from './components/Articles/Articles'

export default function App() {
  return (
    <div className='min-h-screen px-5'>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/learningmore' element={<LearningMore/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </div>
  )
}

