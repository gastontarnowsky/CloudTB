import React from 'react'

const CardsSoftware = () => {
  return (
    <div className="px-5 sm:p-20 pb-0 pt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {/*** PRIMER Tarjeta ***/}
        <div className=" bg-white my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className=" h-32 flex justify-center ">
                <img src="/support.svg" alt="Ilustración de Adaptación" className="w-36" />
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl font-semibold">
                    Soporte Técnico
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5
                mx-4"> 
                Ofrecer soporte técnico de alta calidad, ya sea a través de chat en línea, correo electrónico o llamadas telefónicas, puede ayudar a construir la confianza de los clientes y a mantener la satisfacción. Proporcionamos actualizaciones y soluciones antes de que los usuarios se encuentren con problemas.
            </p>
        </div>

        {/*** SEGUNDA Tarjeta ***/}
        <div className=" bg-white mb-10 md:my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className="h-32 flex justify-center ">
                <img src="/security.svg" alt="Ilustración de diseño" className="w-40"/>
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl  font-semibold">
                    Seguridad de datos
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5
                mx-4"> 
                Es crucial ofrecer software con medidas de seguridad robustas para proteger los datos sensibles de los usuarios. Esto puede incluir cifrado de datos, autenticación de usuarios fuerte, y detección y prevención de intrusiones.
            </p>
        </div>

        {/*** TERCER Tarjeta ***/}
        <div className=" bg-white pt-10 mb-10 lg:my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className="h-32 flex justify-center ">
                <img src="/scalability.svg" alt="Ilustración de Velocidad" className="w-40"/>
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl  font-semibold">
                    Escalabilidad sin límites
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5
                mx-4"> 
                Un software escalable permite añadir más usuarios, capacidad y características sin afectar el rendimiento o la calidad. Al ofrecer un software escalable, su empresa puede aprovechar oportunidades de crecimiento sin tener que cambiar a una solución diferente en el futuro.
            </p>
        </div>

        {/*** CUARTA Tarjeta ***/}
        <div className=" bg-white pt-10 mb-10 lg:my-10 py-10 rounded-xl shadow-lg shadow-neutral-500 h-auto">
            <div className="h-32 flex justify-center ">
                <img src="/block.svg" alt="Ilustración de Optimización" className="w-32 "/>
            </div>
            <div className='my-10 h-10'>
                <p className="text-xl font-semibold">
                    Integración eficiente
                </p>
            </div>
            <p className="text-lg font-normal text-gray-700 mt-0 pb-5
                mx-4"> 
                Integrarse con otros sistemas y aplicaciones puede mejorar la eficiencia y la productividad. Al permitir que los datos fluyan sin problemas entre diferentes sistemas, se reduce la necesidad de manualmente ingresar datos repetidos y se eliminan errores de doble ingreso.
            </p>
        </div>
    </div>
  )
}

export default CardsSoftware