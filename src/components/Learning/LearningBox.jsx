import React from 'react'

export default function LearningBox(props) {
    return (
        <div class="card bg-white shadow-lg relative p-5 rounded-lg w-96 h-80 font-bold min-w-80">
            <h2 class="card-title text-lg mb-5 text-black">{props.question}</h2>
            <p className='mb-5 h-16 text-sm '>{props.answer1}</p>
            <p className='h-20 text-sm'>{props.answer2}</p>
            <div class="card-actions justify-start">
                <button class="btn w-44 absolute bottom-4"><a target='blank' href={props.link}>اطلاعات بیشتر :)</a></button>
            </div>
        </div>
    )
}
