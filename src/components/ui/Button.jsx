

export const Button = ({
    customClass,
    type,
    callback,
    text,
}) => {

    return (
        <button
            type={type}
            onClick={() => {
                (callback) && callback()
            }}
            className={`py-1.5 mt-10 lg:mt-0 font-rajdhani rounded-lg w-full text-center font-bold text-azulOscuro hover:text-white bg-[#e5e7eb] 
            hover:bg-rojo transition-all tracking-wide 
            duration-300 border-2 border-azulOscuro hover:border-rojo text-lg md:text-xl ${customClass}`}
        >
            {text}
        </button>
    )
}