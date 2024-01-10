import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await axios.get("http://localhost:8000/questions");
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getQuiz();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      {questions.map((ques, index) => (
        <div key={index}>
          <div>{ques.question}</div>
          <div>{ques.answer}</div>
        </div>
      ))}
    </div>
  );
}
