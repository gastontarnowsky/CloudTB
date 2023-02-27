import { Link } from 'react-router-dom';

export const LinkNavigate = ({link}) => {

    return (
        <Link
            to={`/${link.path}`}
            className='font-rajdhani transition-all duration-300 text-white font-bold text-lg md:text-xl tracking-wide hover:text-azul hover:translate-y-2'
        >
            {link.name}
        </Link>
    )
}