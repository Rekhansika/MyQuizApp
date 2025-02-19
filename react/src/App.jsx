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
  const [isDarkModeActive,setIsDarkModeActive] = useState(false);

  function toggleLightingMode(){
    if(isDarkModeActive){
      document.body.style.background = "white";
      document.body.style.color = "black";
      setIsDarkModeActive(false);
    } else {
      document.body.style.background = "black";
      document.body.style.color = "white";
      setIsDarkModeActive(true);

    }
  }


  return (
    <>
    <button onClick={toggleLightingMode}>{isDarkModeActive?"Toggle to Light Mode":"Toggle to Dark Mode"}</button>
    <h1>MCQ {isVisibleResult?"Result":"Test"}</h1>
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
      setScore={setScore}
      setCurrentQuestion = {setCurrentQuestion}
      setIsVisibleResult = {setIsVisibleResult}
      />
    }
      
    </>
  )
}

export default App
