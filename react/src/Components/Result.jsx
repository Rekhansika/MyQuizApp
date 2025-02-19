import React, { useState } from 'react'

const result = ({score,totalNoOfQuestions,setScore,setCurrentQuestion,setIsVisibleResult}) => {
    const[percentage,setPercentage] = useState((score/totalNoOfQuestions)*100);
    function resetTest(){
        setScore(0);
        setCurrentQuestion(0);
        setIsVisibleResult(false);

    }
  return (
    <div>
      <p>score: {score}</p>
      <p>percentage: {percentage}</p>
      <h2>{percentage<=50?"Better Luck Next Time":"Well Done"}</h2>
      <button onClick={resetTest}>Reset</button>
    </div>
  )
}

export default result
