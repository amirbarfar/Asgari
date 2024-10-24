import React from 'react'

export default function Login() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-44 lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body font-bold">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">نام کاربری :</span>
                </label>
                <input dir='rtl' type="tel" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">پسورد :</span>
                </label>
                <input type="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">ورود</button>
              </div>
            </form>
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">به داشبورد خوش امدید :)</h1>
            <p className="py-6 font-boldV">بیا اینجا و چیزهای جدید که یاد گرفتی رو اضافه کن تا دیگران هم از آموخته های تو یاد بگیرن.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
