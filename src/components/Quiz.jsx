import quizQuestions from './quizQuestions'
import { useState } from 'react' 
import Logo from './Logo'

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
      <div className='h-[59.78em] w-[120em] bg-[url(./assets/background.jpg)] flex items-center justify-center'>
        <div className='bg-white w-[80em] h-[50em] rounded-xl inset-shadow-sm inset-shadow-black flex flex-col justify-center items-center gap-10'>
          <Logo />
          <h2 className='text-[40px] w-[25em] h-[3em] flex justify-center items-center'>{question}</h2>
          <ul className='flex flex-col gap-7'>
              {choices.map((answer, index) => (
                  <li className='text-[20px] border-2 border-black rounded-xl w-[50em] h-[2.5em] flex justify-center bg-[#052037] text-white items-center hover:bg-[#01090f]' key={index} onClick={() => onAnswerSelected(answer)}>{answer}</li>
              ))}
          </ul>
          <button className='w-80 h-20' onClick={onClickNext}>Próxima</button>
        </div>
      </div>
    )
  }
  
  export default Quiz