import Background from "./Background";
import emoji2 from '../assets/emoji2.png'
import { useNavigate } from 'react-router-dom';

const CongratsPage = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className='relative w-full h-screen'>
        <Background /> 
        <div className='w-[70em] absolute inset-0 flex flex-col justify-center items-center text-center left-[40em] mt-40 gap-15'>
            <img src={emoji2} className="w-[300px]"></img>
            <h1 className="text-[30px]">Parabéns! Você sabe tudo de programação!</h1>
            <button onClick={() => navigate('/quiz')} className="w-[20em] h-[5em]">Jogar novamente</button>
        </div>
        </div>
        </>
    );
}

export default CongratsPage;