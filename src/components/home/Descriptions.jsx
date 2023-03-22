import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProgrammingSvg from '../../assets/programming.svg';
import Present1 from '../../assets/presentacion1.svg';
import Present2 from '../../assets/presentacion2.svg';


import { Navigation, Autoplay, A11y } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

/*import SwiperCore, {
    Autoplay,
    Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Navigation]);
*/
const cardsPresent = [
    {
        img: Present1,
        title: 'Soluciones empresariales personalizadas',
        text: `Brindamos soluciones comerciales personalizadas para organizaciones de alto crecimiento. Trabajamos en estrecha colaboración con los clientes para crear productos personalizados que sean innovadores, atractivos y relevantes.`
    },
    {
        img: Present2,
        title: 'Incorporarse a las nuevas tecnologías',
        text: `Póngase al día con las nuevas tecnologías con el desarrollador de software más reciente, mantenga sus proyectos a tiempo y rinda mejor que nunca.`
    }
] 

export const Descriptions = () => {  
    const [hovered, setHovered] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gris to-azulOscurorgba flex flex-col justify-center pb-20">
            <div className='w-11/12 md:w-9/12 mx-auto'>
                <div className='flex flex-col md:gap-8 md:flex-row md:items-center'>
                    <div className='md:w-1/2 mt-10'>
                        <div className=''>
                            <h2 className='text-2xl text-gray-900'>
                                Con un equipo de <span className='text-azulOscuro font-bold'>programadores</span> experimentados {""}
                                y de <span className='text-azulOscuro font-bold'>diseñadores</span> muy creativos y detallistas {""} 
                                llevamos tu idea a una aplicación <span className='text-azulOscuro font-bold'>web</span> y/o <span className='text-azulOscuro font-bold'>movil</span>.
                                <br />
                                También podes acceder a nuestro panel de <span className='text-azulOscuro font-bold'>servicios</span> {""}
                                donde vas a encontrar herramientas ya <span className='text-azulOscuro font-bold'>desarrolladas</span> {""} 
                                y <span className='text-azulOscuro font-bold'>customizables</span> que puedes implementar en tu negocio y aumentar tu  productividad.
                            </h2>
                        </div>
                        <div className='w-full mt-10'>
                            <img 
                                src={ProgrammingSvg}
                                alt={'Programming Svg'}
                                className='w-full'
                            />
                        </div>
                    </div>
                    <div className='md:w-1/2'        
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <Swiper
                            modules={[Navigation, Autoplay, A11y]}
                            navigation={hovered ? true : false}
                            autoplay={true}
                            loop={true}
                            grabCursor={true}
                        >
                            {cardsPresent.map((card) => (
                                <SwiperSlide key={card.title}>
                                    <li className='px-10 mx-10 bg-white mt-10 mb-5 py-10 rounded-xl shadow-lg shadow-neutral-500 h-[450px] md:h-auto lg:h-[500px] xl:h-[450px]'>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex items-center gap-4 overflow-hidden'>
                                                <div className='flex items-center'>
                                                    <img 
                                                        src={card.img}
                                                        alt={card.title}
                                                        className='w-32 h-32 rounded-full'
                                                    />
                                                </div>
                                                <div className=''>
                                                    <h3 className='text-lg md:text-xl font-bold'>
                                                        {card.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            
                                            <div className=''>
                                                <p className='text-sm md:text-lg text-gray-700 tracking-wide'>
                                                    {card.text}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>  
            </div>  
        </div>
    );
}

/* 
<div className="inline-block align-middle h-[30vh] sm:h-[40vh] md:h-[65vh] lg:h-[80vh]"></div>
            
            <h2 className="text-3xl font-semibold text-center mt-10 md:mt-0 px-3 sm:px-20 font-rajdhani ">Nuestra empresa es desarrolladora de <span className="text-azul">software</span>, creadora de <span className="text-azul">sitios web</span> y de <span className="text-azul">aplicaciones</span> muy atractivos que <span className="text-azul">lo ayudan a destacarse</span> entre la multitud. Nuestro objetivo es satisfacer sus necesidades, ya sea con un <span className="text-azul">nuevo software</span> o con <span className="text-azul">mejoras a los sistemas existentes.</span></h2>

            <CardsPresentation />

            Segunda imagen(esta desaparece en responsive) y su descripcion
            <div className="flex pb-20">
            <img src="programming.svg" alt="Image programming" className="w-[550px] xl:w-[700px]  p-10 pt-0 lg:pl-20 mt-0 m-auto hidden lg:block" />
            <div className="mt-0 lg:pt-0 lg:pr-20 font-thin">
                <p className="font-chakra pt-40 sm:pt-0 pb-28 xl:pt-20 text-3xl  lg:pb-0 lg:mt-0 text-center text-blue-800">
                <span className="text-zinc-700 block">Las habilidades se pueden aprender, la personalidad es inherente.</span> Preferimos seguir avanzando, seguir desafiándonos y hacer cosas interesantes que <span className="text-zinc-700 font-semibold">realmente importen.</span>
                </p>
            </div>
            </div>
*/