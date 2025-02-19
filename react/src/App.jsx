import { useState } from 'react'
import Result from './Components/Result'
import './App.css'
import data from './data.json'
import Question from './Components/Question'
import Option from './Components/Option'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [isVisibleResult,setIsVisibleResult] = useState(false);


  return (
    <>
    <h1>MCQ Test</h1>
    {
      !isVisibleResult?
      <div>
    <Question question={data[currentQuestion].question}/>
    <Option
    options={data[currentQuestion].options} 
    score={score} setScore={setScore} 
    answer={data[currentQuestion].answer} 
    currentQuestion={currentQuestion}
    setCurrentQuestion={setCurrentQuestion}
    setIsVisibleResult={setIsVisibleResult}
    totalNoOfQuestions = {data.length}
    />
      </div>:
      <Result 
      totalNoOfQuestions={data.length}
      score={score}
      />
    }
      
    </>
  )
}

export default App
