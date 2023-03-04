import { Link } from 'react-router-dom';

export const LinkNavigate = ({link}) => {

    return (
        <>
        {link.path === "sobrenosotros" ? (
            <a href="#sobrenosotros" className='font-rajdhani transition-all duration-300 text-white font-bold text-lg md:text-xl tracking-wide hover:text-rojo hover:translate-y-2'>
                Sobre Nosotros
            </a>
        ):(
            <Link
                to={`/${link.path}`}
                className='font-rajdhani transition-all duration-300 text-white font-bold text-lg md:text-xl tracking-wide hover:text-rojo hover:translate-y-2'
            >
                {link.name}
            </Link>)
        }
        </>
    )
}