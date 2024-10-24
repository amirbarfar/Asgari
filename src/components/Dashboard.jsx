import React from 'react'
import Navbar from './Navbar'

export default function Dashboard() {
  return (
    <>
            <Navbar/>
    <div className='font-bold w-[50%] mx-auto'>
        <h2 className='text-xl m-10'>داشبورد</h2>
        <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">عنوان : </span>
          </label>
          <input type="text" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">متن :</span>
          </label>
          <input type="text" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">لینک توضیحات بیشتر :</span>
          </label>
          <input type="text" class="input input-bordered" required />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">ثیت آموزش</button>
        </div>
      </form>
    </div>
    </>
  )
}
