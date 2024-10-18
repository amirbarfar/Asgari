import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import LearningIndex from './components/Learning/LearningIndex'
import ExamIndex from './components/Exam/ExamIndex'
import LearningBox from './components/Learning/Passive/Courses'

export default function App() {
  return (
    <div className='bg-all min-h-screen px-5'>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='learning' element={<LearningIndex/>}/>
        <Route path='/learning/:id' element={<LearningBox/>}/>
        <Route path='exam' element={<ExamIndex/>}/>
      </Routes>
    </div>
  )
}

