import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Dashboard() {
  return (
    <>
            <Navbar/>
    <div className='font-bold w-[50%] max-sm:w-full mx-auto'>
        <h2 className='text-xl m-10'>داشبورد</h2>
        <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">عنوان : </span>
          </label>
          <input type="text" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">متن :</span>
          </label>
          <input type="text" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">لینک توضیحات بیشتر :</span>
          </label>
          <input type="text" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">ثیت آموزش</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}
