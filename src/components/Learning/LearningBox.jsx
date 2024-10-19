import React from 'react'

export default function LearningBox(props) {
    return (
        <div class="bg-[#5784ffb6] p-5 rounded-lg w-96 h-80 font-bold min-w-80">
            <h2 class="card-title text-lg mb-5">{props.question}</h2>
            <p className='mb-5 h-16 text-sm'>{props.answer1}</p>
            <p className='h-20 text-sm'>{props.answer2}</p>
            <div class="card-actions justify-end">
                <button class="w-44 h-12 bg-blue-600 text-white rounded-lg mt-5"><a href={props.link}>اطلاعات بیشتر :)</a></button>
            </div>
        </div>
    )
}
