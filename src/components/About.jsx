import CardsWeb from "./CardsWeb"

const About = () => {
  return (
    <div className="text-5xl text-center " id="sobrenosotros">

        {/*** Primer imagen Sobre Nosotros ***/}
        <div 
            className=" bg-cover bg-center"
            style={{ backgroundImage: 'linear-gradient(to top, rgba(248, 248, 253, 0.5), rgba(129, 140, 248, 0.99)), url(/sobre4kkk.jpg)', padding: '0 0 10rem 0' }}
        >
            <div className="pt-32 pb-20">
                <p className="font-rajdhani  font-semibold tracking-[4px] text-6xl md:text-8xl text-zinc-600 pt-24 mb-10">
                    Sobre nosotros
                </p>
            </div>
        </div>

        {/*** Texto separador ***/}
        <div className="pt-20 px-0 md:px-10 bg-gray-200">
            <h2 className="font-rajdhani  font-semibold text-3xl md:text-4xl px-0 md:px-20 xl:px-80 py-0 pt-10 lg:py-20  ">
                No nos gusta definirnos por <span className="text-blue-900">lo que hemos hecho</span>, sino por <span className="text-blue-900">lo que queremos ofrecer</span>.
            </h2>
        </div>

        {/*** Descripcion de creacion Sitio web con imagen ***/}
        <div className="w-full flex justify-center bg-gray-200 pt-20 ">
            <p className="font-rajdhani border-2 border-b-blue-900">SITIOS WEB</p>
        </div>
        <div className="px-10 xl:flex pt-20 bg-gray-200 ">
            <div className=" mt-10 lg:mt-0 font-normal">
                <p className="font-rajdhani text-blue-900 text-4xl px-0 md:px-20">
                    Creamos un sitio web elegante y funcional para tu negocio
                </p>
                <p className="font-chakra text-xl py-10 px-0 md:px-10">
                    Un sitio web es una excelente manera de dar una buena primera impresión y comunicar la imagen que tu emprendimiento o institución busca representar.
                    <br /> <br />Con una web podrás comunicar, informar, incluso entretener a tu público objetivo. Pero por sobre todo, atraer clientes potenciales y lograr mayores resultados. Con nuestro equipo de expertos en desarrollo y diseño de tu web nos encargamos de hacer realidad este proyecto.
                </p>
            </div>
            <img src="/sobrenosotros.avif" alt="imagen" className="rounded-xl m-auto w-[700px]"/>
        </div>

        {/*** Segundo separador ***/}
        <div className=" bg-gray-200 pt-20 font-thin  ">
            <p className="font-rajdhani tracking-[1px] text-5xl text-blue-900">Lo que mejor hacemos</p>
            <p className="font-chakra text-2xl mt-10 mx-2 md:mx-20 font-normal text-gray-600">
                Somos un equipo de personas que cree fielmente que con la transformación digital se puede llegar mucho más lejos. Con el uso de la tecnología y las herramientas adecuadas, se puede trabajar de manera más inteligente y aumentar la probabilidad de éxito en un negocio. Innovación constante es nuestra premisa.
            </p>

            {/*** CARDS ***/}
            <CardsWeb />
        </div>
    </div>
  )
}

export default About