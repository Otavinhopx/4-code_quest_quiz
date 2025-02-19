import Background from "./Background";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='relative w-full h-screen'>
        <Background /> 
        <div className='w-[70em] absolute inset-0 flex flex-col justify-center items-center text-center left-[40em] mt-40 gap-15'>
            <h1 className='text-[40px] font-bold'>Bem vindo ao CODE QUEST QUIZ</h1>
            <h2 className="font-pixelify text-[20px]">Como funciona: Você terá uma pergunta e 4 alternativas para testar seu conhecimento sobre o mundo da programação. Caso erre, você terá que começar novamente. Preparado(a)?</h2>
            <button onClick={() => navigate('/quiz')} className='w-[20em] h-[5em]'>Começar</button>
        </div>  
        </div>
    )
}

export default Home;