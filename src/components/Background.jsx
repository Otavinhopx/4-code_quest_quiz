import Logo from './Logo'

const Background = () => {
    return(
        <>
        <div className=' absolute inset-0 h-[90] w-[150em] bg-[url(./assets/background.jpg)] flex items-center justify-center'>
        <div className='bg-white w-[90em] h-[60em] rounded-xl inset-shadow-sm inset-shadow-black flex flex-col justify-start items-center gap-10'>
            <Logo />
        </div>
        </div>
        </>
    )
}

export default Background;