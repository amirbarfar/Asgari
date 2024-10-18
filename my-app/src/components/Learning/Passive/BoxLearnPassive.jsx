import React from 'react'

export default function BoxLearn(props) {
    
  return (
    <a href="" className='hover:bg-[#190e5d] hover:scale-110 transition-all duration-150  font-bold w-[262px] h-60 rounded-md p-2 flex items-center justify-center flex-col text-center text-white border border-purple-400 bg-[#190e5d6e]'>
        <h2 className='text-xl mb-5'>{props.name}</h2>
        <p className='text-base'>{props.description}</p>
    </a>
  )
}
