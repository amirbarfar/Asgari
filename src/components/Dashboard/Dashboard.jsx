import React, { useEffect, useState } from 'react';
import NavbarDashborad from './NavbarDashborad';
import { Link } from 'react-router-dom';
import { fetchData } from '../../lib/fetchData';

export default function Dashboard() {
  const [posts, setPosts] = useState([]);          // Define posts as state
  const [questions, setQuestions] = useState([]);   // Define questions as state

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let postsResponse = await fetchData("/posts");
      let questionsResponse = await fetchData("/questions");
      
      const postsData = await postsResponse.json();
      const questionsData = await questionsResponse.json();
      
      setPosts(postsData.posts);         // Update posts state
      setQuestions(questionsData.questions); // Update questions state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function deletePost(id)
  {
    const response = await fetch(`http://localhost:8000/api/posts/delete/${id}`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
    });

    await getData()
  }
  
  async function deleteLearning(id){
    const response = await fetch(`http://localhost:8000/api/questions/delete/${id}`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
    });

    await getData()
  }

  return (
    
    <div className='bg-white min-h-screen'>
      <NavbarDashborad />
        <h2 className='font-bold my-5 text-xl absolute top-[60%] right-[15%]'>تمام مقالات اضافه شده</h2>
      <div className="overflow-x-auto absolute top-[68%] left-[10%] right-[15%] h-80 max-sm:left-[5%] max-sm:right-[5%]">
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
            {
              posts.map((post) => (
                <tr className="bg-base-200" key={post.id}>
                  <th>{post.id}</th>
                  <td>{post.title}</td>
                  <td>{post.created_at}</td>  
                  <td className='gap-1 flex justify-end'>
                    <Link to={`articles/${post.id}`} className="bg-cyan-500 w-36 p-3 rounded-lg text-white text-center max-sm:w-20">ویرایش</Link>
                    <button onClick={() => deletePost(post.id)} className="bg-red-600 w-36 p-3 rounded-lg text-white max-sm:w-20">حذف</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

        <h2 className='font-bold my-5 text-xl absolute top-[10%] left-[10%] right-[15%]'>تمام آموزش های اضافه شده</h2>
      <div className="overflow-x-auto absolute top-[18%] left-[10%] right-[15%] h-80 max-sm:left-[5%] max-sm:right-[5%]">
        <table className="table font-bold ">
          <thead className='text-center'>
            <tr>
              <th>شمارنده</th>
              <th>موضوع آموزش</th>
              <th>تاریخ</th>
              <th>اکشن ها</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {
              questions.map((question) => (
                <tr className="bg-base-200" key={question.id}>
                  <th>{question.id}</th>
                  <td>{question.question}</td>
                  <td>{question.created_at}</td>
                  <td className='gap-1 flex justify-end'>
                    <Link to={`learninges/${question.id}`} className="bg-cyan-500 w-36 p-3 rounded-lg text-white text-center max-sm:w-20">ویرایش</Link>
                    <button onClick={() => deleteLearning(question.id)} className="bg-red-600 w-36 p-3 rounded-lg text-white max-sm:w-20">حذف</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
