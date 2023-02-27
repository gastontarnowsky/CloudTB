import React from 'react'

export const CardsWeb = () => {
  return (
    <div className="px-5 sm:p-20 pb-0 pt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {/*** PRIMER Tarjeta ***/}
        <div className=" bg-white my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className=" h-32 flex justify-center ">
                <img src="/responsive.svg" alt="Ilustración de Adaptación" className="w-36" />
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl font-semibold">
                    Páginas Web adaptativas
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5
                mx-4"> 
                Gran porcentaje de las personas acceden a través de diferentes dispositivos. Nuestros sitios web se adaptan y se muestran perfectamente en cualquier tipo de pantallas.
            </p>
        </div>

        {/*** SEGUNDA Tarjeta ***/}
        <div className=" bg-white mb-10 md:my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className="h-32 flex justify-center ">
                <img src="/diseño.svg" alt="Ilustración de diseño" className="w-40"/>
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl  font-semibold">
                    Diseño intuitivo y amigable
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5
                mx-4"> 
                Todo entra por los ojos. Nos encargamos que el diseño, el esquema de colores y toda la temática de tu web, vaya de manera coherente con la imagen corporativa que tu empresa busca expresar.
            </p>
        </div>

        {/*** TERCER Tarjeta ***/}
        <div className=" bg-white pt-10 mb-10 lg:my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className="h-32 flex justify-center ">
                <img src="/avion.svg" alt="Ilustración de Velocidad" className="w-40"/>
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl  font-semibold">
                    Optimizado para velocidad y funcionalidad
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5
                mx-4"> 
                Las páginas web que desarrollamos están optimizadas para cargar de manera rápida y eficaz, para ofrecer una gran experiencia a los visitantes de tu web.
            </p>
        </div>

        {/*** CUARTA Tarjeta ***/}
        <div className=" bg-white pt-10 mb-10 lg:my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className="h-32 flex justify-center ">
                <img src="/search.svg" alt="Ilustración de Optimización" className="w-32 "/>
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl font-semibold">
                    Optimización para posicionamiento SEO
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5
                mx-4"> 
                El posicionamiento en motores de búsqueda es vital para el funcionamiento de toda web, por lo tanto, nuestro trabajo garantiza que puedas aparecer en Google y llegar a más personas.
            </p>
        </div>
    </div>
  )
}