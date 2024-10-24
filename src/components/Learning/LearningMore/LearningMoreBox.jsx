import React from 'react'

export default function LearningMoreBox(props) {
    return (
        <div class="relative bg-white shadow-lg p-5 rounded-lg w-80 h-80 font-bold min-w-80 max-sm:w-full">
            <h2 class="card-title text-lg mb-5">{props.question}</h2>
            <p className='mb-5 text-sm'>{props.answer1}</p>
            <p className='text-sm'>{props.answer2}</p>
            <div class="card-actions justify-start">
                <button class="absolute w-44 h-12 bottom-5 btn text-black rounded-lg"><a target='blank' href={props.link}>اطلاعات بیشتر :)</a></button>
            </div>
        </div>
    )
}
