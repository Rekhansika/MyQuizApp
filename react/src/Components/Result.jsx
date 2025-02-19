import React, { useState } from 'react'

const result = ({score,totalNoOfQuestions}) => {
    const[percentage,setPercentage] = useState((score/totalNoOfQuestions)*100);
  return (
    <div>
      <p>score: {score}</p>
      <p>percentage: {percentage}</p>
      <h2>{percentage<=50?"Better Luck Next Time":"Well Done"}</h2>
    </div>
  )
}

export default result
