"use client"
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function Comment({data}) {
  const [Comment, setComment] = useState({ name: "", email: "", comment: "",_id:data._id });

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!Comment.email || !Comment.name || !Comment.comment) {
        toast.error('Fill all required fields to proceed!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         
          });
          return null;
      }
      
      const res = await axios.post("/api/createComment",Comment,{cache:false})
      toast.success('Your comment will be displayed shortly after approval. Thank you for your patience!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        })

        console.log(res)

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* Same as */}
<ToastContainer />
      <h1 className="text-2xl font-serif text-red-500 border-b border-red-500 ">Reviews:</h1>
      <div>
      <input type='hidden' name='id' value={data._id}/>
        <form onSubmit={handleSubmit} className="w-2/3 py-6">
          <input
            id="email"
            name="email"
            type="email" // Changed the type to email
            autoComplete="email"
            required
            placeholder="Enter your Email"
            value={Comment.email}
            onChange={(e) => setComment({ ...Comment, email: e.target.value })}
            className="block w-full rounded-md border-0 mb-3 px-2 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 outline-none"
          />
          {/* Add other form inputs for name and comment */}
         
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Enter your Name"
            value={Comment.name}
            onChange={(e) => setComment({ ...Comment, name: e.target.value })}
            className="block w-full mt-5 rounded-md px-2 border-0 mb-3 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 outline-none"
          />
          <textarea
            id="comment"
            name="comment"
            required
            placeholder="Enter your Comment"
            value={Comment.comment}
            onChange={(e) => setComment({ ...Comment, comment: e.target.value })}
            className="block w-full mt-5 rounded-md px-2 border-0 mb-3 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500  sm:text-sm sm:leading-6 outline-none"
          />
         
          {/* Add submit button */}
          
          <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
         
        </form>
      </div>
    </div>
  );
}
