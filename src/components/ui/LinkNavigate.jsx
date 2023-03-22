import { Link } from 'react-router-dom';
import { RiOpenArmLine, RiProjectorLine, RiHandCoinLine } from "react-icons/ri";

export const LinkNavigate = ({link, callback}) => {

    return (
        <>
        {link.path === "sobrenosotros" ? (
            <a 
                href="#sobrenosotros" 
                onClick={() => {
                    (callback) && callback()
                }}
                className='flex items-center gap-2 mt-10 lg:mt-0 font-rajdhani transition-all duration-300 text-white font-bold text-lg md:text-xl tracking-wide hover:text-rojo hover:translate-y-2'
            >
                <span className='text-rojo'><RiOpenArmLine /></span>
                
                Sobre Nosotros
            </a>
        ):(
            <Link
                to={`/${link.path}`}
                className='flex items-center gap-2 mt-10 lg:mt-0 font-rajdhani transition-all  duration-300 text-white font-bold text-lg md:text-xl tracking-wide hover:text-rojo hover:translate-y-2'
            >
                {(link.name === "Proyectos") ? (<span className='text-rojo'><RiProjectorLine /></span>) : (<span className='text-rojo'><RiHandCoinLine /></span>)}
                {link.name}
            </Link>)
        }
        </>
    )
}