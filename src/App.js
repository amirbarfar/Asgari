import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import LearningMore from './components/Learning/LearningMore/LearningMore'
import ArticlesHomeMore from './components/Articles/ArticlesRender'
import ArticlesMore from './components/Articles/ArticlesMore/ArticlesMore'
import Dashboard from './components/Dashboard/Dashboard'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Register from './components/Register'
import ArticlesAdd from './components/Dashboard/ArticlesAdd'
import LearningAdd from './components/Dashboard/LearningAdd'

export default function App() {
  return (
    <div className='min-h-screen mx-5'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learning' element={<LearningMore/>}/>
        <Route path='/articles' element={<ArticlesMore/>}/>
        <Route path='/articles/:id' element={<ArticlesHomeMore/>}/>
        <Route path='/dashboard//' element={<Dashboard/>}/>
        <Route path='/dashboard/articles' element={<ArticlesAdd/>}/>
        <Route path='/dashboard/learninges' element={<LearningAdd/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

