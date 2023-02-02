
const CardsPresentation = () => {
  return (
    <div className="px-5 sm:px-20 pb-0 pt-10 grid gap-4 grid-cols-1 lg:grid-cols-2 text-center mb-20">

        {/*** PRIMER Tarjeta ***/}
        <div className=" bg-white my-10 py-10  rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className=" h-32 flex justify-center ">
                <img src="/presentacion1.svg" alt="Ilustración de Adaptación" className="w-48" />
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl font-semibold">
                    Soluciones empresariales personalizadas
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5 px-5
                mx-4"> 
                Podrá interactuar con clientes, prospectos y empleados. Nuestro objetivo es ayudarlo a tener éxito, al proporcionar un diseño y una experiencia de usuario de primer nivel, para que pueda concentrarse más en los negocios que en la tecnología, recibiendo todos los datos necesarios para seguir avanzando. <br /> <br /> Creatividad, el poder de crear algo de la nada. No solo creamos sistemas, sino que brindamos una gama completa de servicios, desde simples hasta complejos programas de nivel empresarial, nos aseguraremos de que siempre se haga bien.
            </p>
        </div>

        {/*** SEGUNDA Tarjeta ***/}
        <div className=" bg-white mb-10 md:my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className="h-32 flex justify-center ">
                <img src="/presentacion2.svg" alt="Ilustración de diseño" className="w-48"/>
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl  font-semibold">
                    Incorporarse a las nuevas tecnologías
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5  px-8
                mx-4"> 
                Cree su sitio web, programa, aplicacion o sistema (del que pueda estar orgulloso de presumir) desde cero con nuestro equipo experimentado. Ofrecemos todo tipo de sistemas, como gestión de empresas, analisis de datos, almacenamiento y gestión de información, etcétera. Tambien hacemos diferentes sitios web, incluidos blogs y sitios web de facturación que incluyen registros, alojamiento de dominios, diseño, seguridad, mantenimiento y optimización.<br /> <br /> Crearemos una solución personalizada en respuesta a sus necesidades, al mismo tiempo que mantendremos la funcionalidad de su sitio durante toda su vida útil, a medida que convierten a los visitantes en clientes.
            </p>
        </div>

        

    </div>
  )
}

export default CardsPresentation


/*<div className="grid gap-4 grid-cols-1 md:grid-cols-2 mx-10 mb-20 mt-0 rounded-xl shadow-xl shadow-zinc-700 text-center py-10 px-20 font-chakra text-xl">
                
                    <p className="text-2xl mt-5 p-5 font-rajdhani bg-white  rounded-xl shadow-xl ">Podrá interactuar con clientes, prospectos y empleados. Nuestro objetivo es ayudarlo a tener éxito al proporcionar un diseño y una experiencia de usuario de primer nivel, para que pueda concentrarse más en los negocios que en la tecnología.</p>
                    <p className="text-2xl mt-5 p-5 font-rajdhani bg-white  rounded-xl shadow-xl ">Brindamos una gama completa de servicios, ofrecemos todo tipo de sitios web, incluidos blogs y sitios web de facturación que incluyen registro, alojamiento de dominios, diseño, seguridad, mantenimiento y optimización.</p>
                
                
                <p className="text-2xl mt-5 p-5 font-rajdhani bg-white  rounded-xl shadow-xl ">Desde simples hasta complejos programas de nivel empresarial, nos aseguraremos de que siempre se haga bien.</p>
                
                
                <p className="text-2xl mt-5 p-5 font-rajdhani bg-white rounded-xl shadow-xl ">Creatividad, el poder de crear algo de la nada. No solo creamos sistemas, sino también una excelente experiencia de usuario, para que los clientes sepan que usted está allí cuando lo necesiten.</p>
                
                <p className="text-2xl mt-5 p-5 font-rajdhani bg-white rounded-xl shadow-xl ">Cree su sitio web (un sitio web del que puede estar orgulloso de presumir) desde cero con nuestro equipo experimentado. ofrecemos todo tipo de sitios web, incluidos blogs y sitios web de facturación que incluyen registro, alojamiento de dominios, diseño, seguridad, mantenimiento y optimización. Crearemos una solución personalizada en respuesta a sus necesidades, al mismo tiempo que mantendremos la funcionalidad de su sitio durante toda su vida útil, a medida que convierten a los visitantes en clientes.</p>
            
        


            </div> */