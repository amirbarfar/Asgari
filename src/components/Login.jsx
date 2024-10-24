import React, { useState } from 'react'

export default function Login() {
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");

  async function loginForm (event)
  {
    event.preventDefault();
    const res = await fetch("http://localhost:8000/api/auth/login" , {
      method: "POST",
      body: JSON.stringify({phone: name , password: password}),
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })

    console.log(res)
  }
  return (
    <div>
      <div className="hero min-h-screen -mx-3">
        <div className="hero-content flex-col-reverse gap-44 max-sm:gap-10 lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={(event)=> loginForm(event)} className="card-body font-bold bg-base-200 rounded-lg">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">شماره موبایلت :</span>
                </label>
                <input onChange={(event) => {setName(event.target.value)}} type="tel" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">پسورد :</span>
                </label>
                <input onChange={(event) => {setPassword(event.target.value)}} type="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">ورود</button>
              </div>
            </form>
          </div>
          <div>
            <h1 className="text-5xl font-bold max-sm:text-3xl">به بخش ورود خوش امدید :)</h1>
            <p className="py-6 text-lg font-boldV max-sm:text-sm">بیا و وارد شو به حساب کاربریت تا به داشبورد دسترسی داشته باشی و تو داشبورد چیزهای جدید که یاد گرفتی رو اضافه کن تا دیگران هم از آموخته های تو یاد بگیرن.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
