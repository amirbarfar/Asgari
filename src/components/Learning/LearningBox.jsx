import React from 'react'

export default function LearningBox(props) {
    return (
        <div class="card bg-primary text-primary-content w-96 h-80 font-bold">
            <div class="card-body">
                <h2 class="card-title">{props.question}</h2>
                <p>{props.answer1}</p>
                <p>{props.answer2}</p>
                <div class="card-actions justify-end">
                    <button class="btn"><a href={props.link}>اطلاعات بیشتر :)</a></button>
                </div>
            </div>
        </div>
    )
}
