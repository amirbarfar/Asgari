import React from 'react'
import NavbarDashborad from './NavbarDashborad'

export default function Dashboard() {
  return (
    <div className='bg-white min-h-screen'>
      <NavbarDashborad />
      <div className="overflow-x-auto absolute top-[50%] left-[20%] right-[25%]">
      <h2 className='font-bold my-5 text-xl'>تمام مقالات اضافه شده</h2>
        <table className="table font-bold ">
          <thead>
            <tr className='text-center'>
              <th>شمارنده</th>
              <th>موضوع مقاله</th>
              <th>تاریخ ثبت مقاله</th>
              <th>اکشن ها</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className=' gap-1 flex justify-end '>
                <button className="bg-cyan-500 w-36 p-3 rounded-lg text-white">ویرایش</button>
                <button className="bg-red-600 w-36 p-3 rounded-lg text-white">حذف</button>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td className=' gap-1 flex justify-end '>
                <button className="bg-cyan-500 w-36 p-3 rounded-lg text-white">ویرایش</button>
                <button className="bg-red-600 w-36 p-3 rounded-lg text-white">حذف</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto absolute top-[10%] left-[20%] right-[25%]">
      <h2 className='font-bold my-5 text-xl'>تمام آموزش های اضافه شده</h2>
        <table className="table font-bold ">
          <thead>
            <tr className='text-center'>
              <th>شمارنده</th>
              <th>موضوع آموزش</th>
              <th>تاریخ</th>
              <th>اکشن ها</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className=' gap-1 flex justify-end '>
                <button className="bg-cyan-500 w-36 p-3 rounded-lg text-white">ویرایش</button>
                <button className="bg-red-600 w-36 p-3 rounded-lg text-white">حذف</button>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td className=' gap-1 flex justify-end '>
                <button className="bg-cyan-500 w-36 p-3 rounded-lg text-white">ویرایش</button>
                <button className="bg-red-600 w-36 p-3 rounded-lg text-white">حذف</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
