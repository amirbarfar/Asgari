import React from 'react'

export default function ArticlesMoreBox(props) {
    return (
        <div className="card bg-base-100 w-[430px] max-sm:w-full shadow-xl relative">
            <figure className="px-10 pt-10">
                <img className="rounded-xl" alt={props.subject} src={props.img} />
            </figure>
            <div className="card-body items-center flex-col justify-between h-[350px] text-center">
                <h2 className="text-lg">{props.subject}</h2>
                <p className='text-sm my-5'>{props.title}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">بریم مقاله بخونیم :)</button>
                </div>
            </div>
        </div>
    )
}
