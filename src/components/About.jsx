import CardsWeb from "./CardsWeb"
import CardsSoftware from "./CardsSoftware"

const About = () => {
  return (
    <div className="text-5xl text-center " id="sobrenosotros">

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
        <div className="pt-20 px-0 md:px-10 bg-gray-200">
            <h2 className="font-rajdhani  font-semibold text-3xl md:text-4xl px-0 md:px-20 xl:px-80 py-0 pt-10 lg:py-20  ">
                No nos gusta definirnos por <span className="text-blue-900">lo que hemos hecho</span>, sino por <span className="text-blue-900">lo que queremos ofrecer</span>.
            </h2>
        </div>



        {/*** Descripcion de creacion Software con imagen ***/}
        <div className="w-full flex justify-center bg-gray-200 pt-20">
            <p className="font-rajdhani border-2 border-b-blue-900">DESARROLLO DE SOFTWARE</p>
        </div>
        <div className="px-3 sm:px-10 xl:px-20 pt-20 bg-gray-200 xl:flex justify-between">
            <img src="/software.svg" alt="imagen" className="rounded-xl m-auto w-[500px] h-[600px] xl:order-last"/>
            <div className=" mt-10 lg:mt-0 font-normal order-last xl:order-first xl:mr-5 xl:mt-10">
                <p className="font-rajdhani text-blue-900 text-4xl px-0 md:px-20 xl:px-2">
                    El desarrollo de software es el proceso de diseñar, crear y probar.
                </p>
                <p className="font-chakra text-xl py-10 px-0 md:px-10 xl:px-2">
                    Al incorporar un software en su empresa, esta ayudando a mantener el ambiente organizado, ahorrar tiempo y aumentar la eficiencia. También permite que su equipo sea más productivo, lo que a su vez le permite aumentar las ventas.
                    <br /> <br />El software es el corazón de un negocio, hace las cosas más rápidas y fáciles. El software es lo que mantiene todo lo demás funcionando a un alto nivel.
                    <br /> <br />Creemos que en cualquier trabajo se necesitan herramientas adecuadas para automatizar procesos y crear flujos de trabajo personalizados. Nuestras herramientas lo ayudarán a comprender el comportamiento del cliente y la resolución de problemas, lo que le permite mantener a sus ingenieros enfocados en la construcción de productos y calidad a lo largo del tiempo.
                </p>
            </div>
        </div>

        {/*** Separador Software ***/}
        <div className=" bg-gray-200 pt-20 font-thin  ">
            <p className="font-rajdhani tracking-[1px] text-5xl text-blue-900">Tecnología que revoluciona el mercado</p>
            <p className="font-chakra text-2xl mt-10 mx-2 md:mx-20 font-normal text-gray-600">
                Nos enorgullece ser parte de la revolución tecnológica y creemos en el potencial que tiene la creación de software para cambiar el mundo. Como equipo de profesionales, nos esforzamos por utilizar la tecnología de manera inteligente y estamos comprometidos a desarrollar soluciones innovadoras que resuelvan los desafíos empresariales de hoy en día.
            </p>

            {/*** CARDS ***/}
            <CardsSoftware />
        </div>





        {/*** Descripcion de creacion Sitio web con imagen ***/}
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

        {/*** Separador Paginas Web ***/}
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