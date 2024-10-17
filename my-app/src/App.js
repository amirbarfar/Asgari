import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Learning from './components/Learning'
import Exam from './components/Exam'

export default function App() {
  return (
    <div className='bg-all min-h-screen px-5'>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path={'learning'} element={<Learning/>}/>
        <Route path='exam' element={<Exam/>}/>
      </Routes>
    </div>
  )
}

