import quizQuestions from './quizQuestions'
import { useState } from 'react' 

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
  })

  
    const onClickNext = () => {
        setActiveQuestion((active) => active + 1);
    };

    const onAnswerSelected = (answer) => {
        if (answer === correctAnswer) {
          setSelectedAnswer(true)
          console.log('right')
        } else {
          setSelectedAnswer(false)
          console.log('wrong')
        }
      }

    const { questions } = quizQuestions;
    const { question, choices, correctAnswer} = questions[activeQuestion];
  

    return (
      <div>
        <h1>Quiz</h1>
        <h2>{question}</h2>
        <ul>
            {choices.map((answer, index) => (
                <li key={index} onClick={() => onAnswerSelected(answer)}>{answer}</li>
            ))}
        </ul>
        <button onClick={onClickNext}>Next</button>
      </div>
    )
  }
  
  export default Quiz