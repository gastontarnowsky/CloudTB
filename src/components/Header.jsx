import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, LinkNavigate } from '../components';
import { UIContext } from '../contexts'; 
import cloudIcon from '../assets/cloud.png';
export const Header = () => {

    const { handleModal, links } = useContext(UIContext);

    return (
        <header className='fixed z-40 top-0 left-0 w-full bg-azulOscuro'>
            <div className='w-11/12 md:w-9/12 mx-auto py-3'>
                <div className='flex items-center justify-between'>
                    <a
                        href={'#presentacion'}
                        className={`w-32 `}
                    >
                        <img 
                            src={cloudIcon}
                            alt={'Cloud icon'}
                            className=''
                        />
                    </a>

                    {/* <div className="gap-4 block lg:flex text-center ">
                        <a 
                            href="#sobrenosotros" 
                            className="font-rajdhani text-zinc-600 text-2xl px-3 py-1 border-2 border-transparent hover:border-zinc-400 rounded-xl transform transition-all"
                        >
                            Sobre Nosotros
                        </a>

                        <button type="button" onClick={handleModal} className="text-lg font-chakra tracking-[1px] px-3 py-1 border-2 border-azul rounded-xl font-bold hover:bg-azul hover:text-white hover:border-zinc-600 hover:border-2 transform transition-all">
                            <p>Contáctanos</p>
                        </button>
                    </div> */}
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-4'>
                            {links.map((link) => (
                                <li
                                    key={link.path}
                                >
                                    {link.type === 'button' ? (
                                        <Button
                                            customClass='px-6'
                                            type={'button'}
                                            callback={function() {
                                                handleModal()
                                            }}
                                            text={link.name}
                                        />
                                    ) : ( 
                                        <LinkNavigate link={link} />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}