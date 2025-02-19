import quizQuestions from './quizQuestions'
import { useState } from 'react' 
import Background from './Background';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const navigate = useNavigate();
  
    const onClickNext = () => {
      if(selectedAnswer){
        if (activeQuestion === questions.length - 1) {
          navigate('/congrats');
        }
        setActiveQuestion((active) => active + 1);
        setSelectedAnswerIndex(null)
      }else{
        navigate('/fail')
      }
        
    };

    const onAnswerSelected = (answer, index) => {
      setSelectedAnswerIndex(index);
        if (answer === correctAnswer) {
          setSelectedAnswer(true);
          console.log('right');
        } else {
          setSelectedAnswer(false);
          console.log('wrong');
        };
      };

    const { questions } = quizQuestions;
    const { question, choices, correctAnswer} = questions[activeQuestion];
  

    return (
        <div className='relative w-full h-screen'>
          <Background />
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center left-[75em] mt-40 gap-15'>
          <h2 className='text-[30px] w-[45em] h-[3em] flex justify-center items-center'>{question}</h2>
          <ul className='flex flex-col gap-7'>
              {choices.map((answer, index) => (
                  <li className= {selectedAnswerIndex === index ? 'selected_answer' : 'answer'} 
                  key={index} onClick={() => onAnswerSelected(answer, index)}>{answer}</li>
              ))}
          </ul>
          <button className='w-80 h-20' onClick={() => onClickNext(selectedAnswer)} disabled={selectedAnswerIndex === null}>{activeQuestion === questions.length - 1 ? 'Terminar' : 'Próxima'}</button>
          </div>
        </div>

    )
  }
  
  export default Quiz