

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
            className={`py-2 font-rajdhani rounded-lg w-full text-center font-bold text-azul hover:text-azulOscuro bg-azulOscuro 
            hover:bg-azul transition-all tracking-wide 
            duration-300 border-2 border-azul hover:border-azul text-lg md:text-xl ${customClass}`}
        >
            {text}
        </button>
    )
}