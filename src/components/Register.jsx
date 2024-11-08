import React, { useState } from 'react'
import { fetchData } from "../lib/fetchData";
import { redirect, Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Regester() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    try {
      const res = await fetchData("/auth/register", 'POST', { phone: phone, name: username, password: password });

      if (res.ok) {
        console.log("Register successful!");
        return redirect("/dashboard");
      } else {
        const errorData = await res.json();
        alert(errorData.message || "An error occurred during register.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  }

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse gap-44 max-sm:gap-10 lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={(event) => registerUser(event)} className="card-body font-bold bg-base-200 rounded-lg -m-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">نام کاربری :</span>
                </label>
                <input onChange={(event) => setUsername(event.target.value)} dir='rtl' type="tel" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">شمازه موبایلت : </span>
                </label>
                <input onChange={(event) => setPhone(event.target.value)} dir='rtl' type="tel" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">پسورد :</span>
                </label>
                <input onChange={(event) => setPassword(event.target.value)} type="password" className="input input-bordered" required />
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
