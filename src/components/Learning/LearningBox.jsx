import React from 'react'

export default function LearningBox(props) {
    return (
        <div className="card bg-white shadow-lg relative p-5 rounded-lg w-96 h-80 font-bold min-w-96">
            <h2 className="card-title text-lg mb-5 text-black">{props.question}</h2>
            <p className='mb-5 h-16 text-sm '>{props.answer1}</p>
            <p className='h-20 text-sm'>{props.answer2}</p>
            <div className="card-actions justify-start">
                <button className="btn w-44 absolute bottom-4"><a target='blank' href={props.link}>اطلاعات بیشتر :)</a></button>
            </div>
        </div>
    )
}
