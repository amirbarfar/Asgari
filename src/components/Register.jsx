import React, { useState } from 'react'

export default function Regester() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse gap-44 max-sm:gap-10 lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body font-bold bg-base-200 rounded-lg -m-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">نام کاربری :</span>
                </label>
                <input dir='rtl' type="tel" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">شمازه موبایلت : </span>
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
                <button className="btn btn-primary">ثبت نام</button>
              </div>
            </form>
          </div>
          <div>
            <h1 className="text-5xl font-bold max-sm:text-3xl">به بخش ثبت نام خوش امدید :)</h1>
            <p className="py-6 text-lg font-boldV max-sm:text-sm">خب حالا که حساب کاربری نداری یک حساب بساز بعد یک کاریش میکنیم تا وارد شی به داشبورد و چیز هایی که میدونی رو  اضافه کنی :)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
