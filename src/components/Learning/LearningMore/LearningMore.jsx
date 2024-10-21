import React, { useState } from 'react';
import Animation from '../../Animation';
import Navbar from '../../Navbar';
import Data2 from './LearningData2';
import LearningMoreBox from './LearningMoreBox';

export default function LearningMore() {
  const [search, setSearch] = useState('');

  function changeHandler(event) {
    let result = event.target.value;
    setSearch(result);
  }

  let resultSearch = Data2.filter((item) => {
    return item.question.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Animation />
      <Navbar />
      
      <div className="flex justify-center items-center">
        <label className="input input-bordered flex items-center gap-2 w-[50%] mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70"> 
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="جستجو کنید..."
            onChange={changeHandler}
            className="w-full p-2 outline-none"
          />
        </label>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-10">
        {search ? (
          resultSearch.length > 0 ? (
            resultSearch.map((item) => (
              <LearningMoreBox {...item} key={item.id} />
            ))
          ) : (
            <p className="text-red-500 text-xl">موردی یافت نشد</p>
          )
        ) : (
          Data2.map((item) => <LearningMoreBox {...item} key={item.id} />)
        )}
      </div>

      <Animation />
    </div>
  );
}
