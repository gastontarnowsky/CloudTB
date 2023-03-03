

export const Button = ({
    customClass = '',
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
            className={`py-1.5 font-rajdhani rounded-lg w-full text-center font-bold text-azulOscuro hover:text-azulOscuro bg-[#e5e7eb] 
            hover:bg-azul transition-all tracking-wide 
            duration-300 border-2 border-azulOscuro hover:border-azul text-lg md:text-xl ${customClass}`}
        >
            {text}
        </button>
    )
}