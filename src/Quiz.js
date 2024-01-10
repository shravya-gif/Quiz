import React from 'react'
import axios from 'axios'
export default function Quiz() {
    const getQuiz=async()=>{
        try {
           const response= await axios.get()
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1>hii</h1>
    </div>
  )
}
