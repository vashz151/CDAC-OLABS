import React from 'react'
import "./style.css";

const Evaluation = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>SELF EVALUATION QUIZ</h1>
      <h2>Current Score:2</h2>
      <div className='question-card'>
        <h2>Question 1 out of 5</h2>
        <h3 className='question-text'>What is the capital of India?</h3>
        <ul>
            <li>Mumbai</li>
            <li>Delhi</li>
            <li>Chennai</li>
            <li>Assam</li>
        </ul>
      </div>
      <div className='final-results'>
        <h1>Final Results</h1>
        <h2>1 out of 5 correct -(20%)</h2>
        <button>Restart</button>
      </div>
    </div>
  )
}

export default Evaluation
