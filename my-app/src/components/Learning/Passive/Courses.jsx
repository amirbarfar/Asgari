import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import AllData from './AllData'

export default function Courses() {
  let params = useParams()

  const [data, setData] = useState(AllData)

  let result = data.find((item) => {
    return item.id == params.id
  })


  return (
    <>
      <div class="flex justify-between items-center pt-10">
        <div class="w-[55%] font-bold ">
          <h2 class="text-xl mb-5">{result.qustion1}</h2>
          <p>{result.answer1}</p>
        </div>
        <div className='w-[45%]'>
          <img className='' src="../image/Hambandy/Hambandy3.png" alt="img-hambandy" />
        </div>
      </div>
      <div class="flex justify-between items-center pt-10">
        <div class="w-[55%] font-bold">
          <h2 class="text-xl mb-5">{result.qustion2}</h2>
          <ul>
            <li><a href="">{result.answer2b1}</a></li>
            <li><a href="">{result.answer2b2}</a></li>
            <li><a href="">{result.answer2b3}</a></li>
          </ul>
        </div>
        <div className='w-[45%]'>
          <img className='' src="../image/Hambandy/Hambandy4.png" alt="img-hambandy" />
        </div>
      </div>
      <div class="flex justify-between items-center pt-10 flex-col">
        <div class="w-full font-bold text-center">
          <h2 class="text-xl mb-5">{result.qustion3}</h2>
          <p>{result.answer3}</p>
        </div>
        <img className='w-[50%]' src="../image/Hambandy/Hambandy2.png" alt="" />
        <img className='w-[50%]' src="../image/Hambandy/Hambandy1.svg" alt="" />
      </div>
    </>
  )
}
