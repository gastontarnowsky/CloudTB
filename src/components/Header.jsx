import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, LinkNavigate } from '../components';
import { UIContext } from '../contexts'; 
import cloudIcon from '../assets/cloud3.png';
export const Header = () => {

    const { handleModal, links, sidebar, handleSidebar } = useContext(UIContext);

    return (
        <header className={` ${sidebar ? " -left-0 " : " -left-full "} transition-all h-full lg:static w-[80%] md:w-[70%] lg:w-full fixed z-40 top-0 bg-azulOscuro lg:rounded-b-md `}>
            <div className='w-11/12 md:w-9/12 mx-auto py-3 '>
                <div className='block lg:flex items-center justify-between'>
                    <a
                        href={'#presentacion'}
                        className={`w-1/5`}
                        onClick={()=> handleSidebar()}
                    >
                        <p className='uppercase tracking-[3px] mt-8 lg:mt-0 font-bold font-chakra text-2xl text-white'> 
                            Innova<span className='text-rojo'>dos</span>
                        </p>
                    </a>

                    <nav className='block '>
                        <ul className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 '>
                            {links.map((link) => (
                                <li
                                    key={link.path}
                                    className=""
                                >
                                    {link.type === 'button' ? (
                                        <Button
                                            customClass='px-6 flex-end'
                                            type={'button'}
                                            callback={function() {
                                                handleModal()
                                            }}
                                            text={link.name}
                                        />
                                    ) : ( 
                                        <LinkNavigate 
                                            link={link} 
                                            callback={function() {
                                                handleSidebar()
                                            }}
                                        />
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