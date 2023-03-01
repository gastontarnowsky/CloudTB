import {
    CardsSoftware,
    CardsWeb
} from '.'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import Rocket from "../assets/rocket.png";
import Tarjeta1 from '../assets/support.svg';
import Tarjeta2 from '../assets/security.svg';
import Tarjeta3 from '../assets/scalability.svg';
import Tarjeta4 from '../assets/block.svg';
import Tarjeta5 from '../assets/responsive.svg';
import Tarjeta6 from '../assets/diseño.svg';
import Tarjeta7 from '../assets/avion.svg';
import Tarjeta8 from '../assets/search.svg';


import SwiperCore, {
    Autoplay,
    Navigation
} from 'swiper/core';


SwiperCore.use([Autoplay, Navigation]);

const cardsPresent = [
    {
        img: Tarjeta1,
        tamanioimg: "w-36",
        title: 'Soporte Técnico',
        text: `Ofrecemos soporte técnico de alta calidad, ya sea a través de chat en línea, correo electrónico o llamadas telefónicas, para ayudar a construir la confianza de nuestros clientes. Proporcionamos actualizaciones y soluciones antes de que los usuarios se encuentren con problemas.`,
        
    },{
        img: Tarjeta2,
        tamanioimg: "w-36",
        title: 'Seguridad de datos',
        text: `Es crucial ofrecer software con medidas de seguridad robustas para proteger los datos sensibles de los usuarios. Esto puede incluir cifrado de datos, autenticación de usuarios fuerte, y detección y prevención de intrusiones.`
    },{
        img: Tarjeta3,
        tamanioimg: "w-44",
        title: 'Escalabilidad sin límites',
        text: `Un software escalable permite añadir más usuarios, capacidad y características sin afectar el rendimiento o la calidad. Al ofrecer un software escalable, su empresa puede aprovechar oportunidades de crecimiento sin tener que cambiar a una solución diferente en el futuro.`,
    },{
        img: Tarjeta4,
        tamanioimg: "w-32",
        title: 'Integración eficiente',
        text: `Integrarse con otros sistemas y aplicaciones puede mejorar la eficiencia y la productividad. Al permitir que los datos fluyan sin problemas entre diferentes sistemas, se reduce la necesidad de manualmente ingresar datos repetidos y se eliminan errores de doble ingreso.`
    },

    {
        img: Tarjeta5,
        tamanioimg: "w-36",
        title: 'Páginas Web adaptativas',
        text: `Gran porcentaje de las personas acceden a través de diferentes dispositivos. Nuestros sitios web se adaptan y se muestran perfectamente en cualquier tipo de pantallas.`,
        
    },{
        img: Tarjeta6,
        tamanioimg: "w-36",
        title: 'Diseño intuitivo y amigable',
        text: `Todo entra por los ojos. Nos encargamos que el diseño, el esquema de colores y toda la temática de tu web, vaya de manera coherente con la imagen corporativa que tu empresa busca expresar.`
    },{
        img: Tarjeta7,
        tamanioimg: "w-44",
        title: 'Optimizado para velocidad y funcionalidad',
        text: `Las páginas web que desarrollamos están optimizadas para cargar de manera rápida y eficaz, para ofrecer una gran experiencia a los visitantes de tu web.`,
    },{
        img: Tarjeta8,
        tamanioimg: "w-32",
        title: 'Optimización para posicionamiento SEO',
        text: `El posicionamiento en motores de búsqueda es vital para el funcionamiento de toda web, por lo tanto, nuestro trabajo garantiza que puedas aparecer en Google y llegar a más personas.`
    }
] 

export const About = () => {
  return (
    <div className="text-5xl text-center" id="sobrenosotros">

        {/*** Primer imagen Sobre Nosotros ***/}
        <div 
            className=" bg-cover bg-center"
            style={{ backgroundImage: 'linear-gradient(to top, rgba(248, 248, 253, 0.5), rgba(102, 182, 243, 0.99)), url(/sobre4kkk.jpg)', padding: '0 0 10rem 0' }}
        >
            <div className="pt-32 pb-20">
                <p className="font-rajdhani  font-semibold tracking-[4px] text-6xl md:text-8xl text-zinc-600 pt-24 mb-10">
                    Sobre nosotros
                </p>
            </div>
        </div>

        {/*** Texto separador ***/}
        <div className="pt-20 px-5 md:px-10 bg-gray-200">
            <h2 className="font-rajdhani  font-semibold text-3xl md:text-4xl px-0 md:px-20 xl:px-80 py-0 pt-10 lg:py-20  ">
                No nos gusta definirnos por <span className="text-blue-900">lo que hemos hecho</span>, sino por <span className="text-blue-900">lo que queremos ofrecer</span>.
            </h2>
        </div>



        {/*** Descripcion de creacion Software con imagen ***/}
        <div className="w-full flex justify-center bg-gray-200 pt-20">
            <p className="font-rajdhani border-2 border-b-blue-900">DESARROLLO DE SOFTWARE</p>
        </div>
        <div className="px-3 sm:px-10 xl:px-32 pt-20 bg-gray-200 lg:flex justify-between">
            <img src={Rocket} alt="imagen" className="hidden lg:block rounded-lg m-auto mt-10 lg:w-[800px] lg:h-[500px] opacity-80 order-last"/>
            <div className=" mt-10 lg:mt-0 font-normal order-first xl:mr-5 xl:mt-10">
                <p className="font-rajdhani text-blue-900 text-4xl px-0 md:px-20 xl:px-2">
                    El desarrollo de software es el proceso de diseñar, crear y probar.
                </p>
            <img src={Rocket} alt="imagen" className="block lg:hidden rounded-lg m-auto mt-10 w-[150px] h-[350px] md:w-[150px] md:h-[350px] opacity-80 order-last"/>
                <p className="font-chakra text-xl py-10 px-0 md:px-10 xl:px-2">
                    Al incorporar un software en su empresa, esta ayudando a mantener el ambiente organizado, ahorrar tiempo y aumentar la eficiencia. También permite que su equipo sea más productivo, lo que a su vez le permite aumentar las ventas.
                    <br /> <br />El software es el corazón de un negocio, hace las cosas más rápidas y fáciles. El software es lo que mantiene todo lo demás funcionando a un alto nivel.
                    <br /> <br />Creemos que en cualquier trabajo se necesitan herramientas adecuadas para automatizar procesos y crear flujos de trabajo personalizados. Nuestras herramientas lo ayudarán a comprender el comportamiento del cliente y la resolución de problemas, lo que le permite mantener a sus ingenieros enfocados en la construcción de productos y calidad a lo largo del tiempo.
                </p>
            </div>
        </div>

        {/*** Separador Software ***/}
        <div className=" bg-gray-200 pt-20 font-thin">
            <p className="font-rajdhani tracking-[1px] text-5xl text-blue-900">Tecnología que revoluciona el mercado</p>
            <p className="font-chakra text-2xl mt-10 pb-20 mx-2 md:mx-20 font-normal text-gray-600">
                Nos enorgullece ser parte de la revolución tecnológica y creemos en el potencial que tiene la creación de software para cambiar el mundo. Como equipo de profesionales, nos esforzamos por utilizar la tecnología de manera inteligente y estamos comprometidos a desarrollar soluciones innovadoras que resuelvan los desafíos empresariales de hoy en día.
            </p>

            {/*** CARDS ***/}
            <div className="hidden md:block pb-20">
                <Swiper 
                    slidesPerView={2}
                    spaceBetween={60}
                    className="px-2 lg:px-20"
                >
                    {cardsPresent.map((card) => (
                        <SwiperSlide key={card.title} className="">
                            {/*** Tarjeta ***/}
                            <div className=" bg-white mb-10 pt-10 pb-15 px-5 rounded-xl shadow-lg shadow-neutral-500 h-auto">
                                <div className=" h-32 flex justify-center ">
                                    <img 
                                        src={card.img}
                                        alt={card.title}
                                        className={card.tamanioimg}
                                    />  
                                </div>
                                <div className='my-10 h-10'>
                                    <h3 className="text-xl font-semibold">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="md:h-72 lg:h-56 text-lg font-normal text-gray-700
                                    px-4"> 
                                    {card.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/*** CARD EN RESPONSIVE. buscar mejor forma de hacerlo en la documentacion de swiper ***/}                
            <div className="block md:hidden pb-20">
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={25}
                    className="px-10"
                >
                    {cardsPresent.map((card) => (
                        <SwiperSlide key={card.title} className="h-auto">
                            {/*** Tarjeta ***/}
                            <div className=" bg-white mb-10 pt-10 pb-15 px-5 rounded-xl shadow-lg shadow-neutral-500 h-auto">
                                <div className=" h-32 flex justify-center ">
                                    <img 
                                        src={card.img}
                                        alt={card.title}
                                        className={card.tamanioimg}
                                    />  
                                </div>
                                <div className='my-10 h-10'>
                                    <h3 className="text-xl font-semibold">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="h-[420px] sm:h-56 text-lg font-normal text-gray-700
                                    px-4"> 
                                    {card.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>




        
        {/*** Descripcion de creacion Sitio web con imagen ***/}
{/* 
        <div className="w-full flex justify-center bg-gray-200 pt-20 ">
            <p className="font-rajdhani border-2 border-b-blue-900">PÁGINAS WEB</p>
        </div>
        <div className="px-3 sm:px-10 xl:flex pt-20 bg-gray-200 ">
            <img src="/web.svg" alt="imagen" className="rounded-xl m-auto w-[700px]"/>
            <div className=" mt-10 lg:mt-0 font-normal xl:mt-16">
                <p className="font-rajdhani text-blue-900 text-4xl px-0 md:px-20 xl:px-2">
                    Creamos un sitio web elegante y funcional para tu negocio
                </p>
                <p className="font-chakra text-xl py-10 px-0 md:px-10 xl:px-2">
                    Un sitio web es una excelente manera de dar una buena primera impresión y comunicar la imagen que tu emprendimiento o institución busca representar.
                    <br /> <br />Con una web podrás comunicar, informar, incluso entretener a tu público objetivo. Pero por sobre todo, atraer clientes potenciales y lograr mayores resultados. Con nuestro equipo de expertos en desarrollo y diseño de tu web nos encargamos de hacer realidad este proyecto.
                </p>
            </div>
        </div>
*/}
        {/*** Separador Paginas Web ***/}
{/*
        <div className=" bg-gray-200 pt-20 font-thin  ">
            <p className="font-rajdhani tracking-[1px] text-5xl text-blue-900">Lo que mejor hacemos</p>
            <p className="font-chakra text-2xl mt-10 mx-2 md:mx-20 font-normal text-gray-600">
                Somos un equipo de personas que cree fielmente que con la transformación digital se puede llegar mucho más lejos. Con el uso de la tecnología y las herramientas adecuadas, se puede trabajar de manera más inteligente y aumentar la probabilidad de éxito en un negocio. Innovación constante es nuestra premisa.
            </p>
*/}
            {/*** CARDS ***/}
{/*
            <CardsWeb />
        </div>
*/}
    </div>

  )
}