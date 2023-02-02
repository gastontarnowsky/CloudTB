
import About from "./About"
import Footer from "./Footer"
import CardsPresentation from "./CardsPresentation"


const Content = ({handleModal}) => {
  return (
    <section className="w-full pt-10 align-center bg-white text-black absolute">

        {/*** Titulo y descripcion ***/}
        <h1 className="text-7xl text-center font-rajdhani tracking-[2px] mt-10">Somos CloudTB</h1>
        <div className="w-[60%] mx-auto">
            <h3 className="text-center text-2xl p-2 mt-2 font-rajdhani">Somos una empresa creadora de software, con más de tres años de experiencia y con una amplia gama  de disciplinas de diseño.</h3>
        </div>

        {/*** Primera imagen ***/}
        <div className="w-[50%] md:w-[35%] xl:w-[30%] bg-azul rounded-full mx-auto z-10 absolute right-0 top-96 left-0">
            <img src="company.svg" alt="Image company" className="rounded-full pb-14" />
        </div>

        
        <div className="block pt-20 pb-10 bg-gradient-to-t from-azul to-white lg:justify-between lg:align-center ">
            <div className=" sm:inline-block sm:align-middle sm:h-[80vh]"></div>

            {/*** Descripcion ***/}
            <h2 className="text-3xl font-semibold text-center mt-5 px-20 font-rajdhani ">Nuestra empresa es desarrolladora de <span className="text-indigo-600">software</span>, creadora de <span className="text-indigo-600">sitios web</span> y de <span className="text-indigo-600">aplicaciones</span> muy atractivos que <span className="text-indigo-600">lo ayudan a destacarse</span> entre la multitud. Nuestro objetivo es satisfacer sus necesidades, ya sea con un <span className="text-indigo-600">nuevo software</span> o con <span className="text-indigo-600">mejoras a los sistemas existentes.</span></h2>
                
            <CardsPresentation />
            
        {/*** Segunda imagen(esta desaparece en responsive) y su descripcion ***/}
            <div className="flex pb-20">
                <img src="programming.svg" alt="Image programming" className="w-[550px] xl:w-[700px]  p-10 pt-0 lg:pl-20 mt-0 m-auto hidden lg:block" />
                <div className="mt-0 lg:pt-0 lg:pr-20 font-thin">
                    <p className="font-chakra pt-80 sm:pt-0 pb-28 xl:pt-20 text-3xl  lg:pb-0 lg:mt-0 text-center text-blue-800">
                        <span className="text-zinc-700 block">Las habilidades se pueden aprender, la personalidad es inherente.</span> Preferimos seguir avanzando, seguir desafiándonos y hacer cosas interesantes que <span className="text-zinc-700 font-semibold">realmente importen.</span>
                    </p>
                </div>
            </div>
        </div>

        {/*** SOBRE NOSOTROS ***/}
        <About />

        {/*** FOOTER ***/}
        <Footer
            handleModal={handleModal}
        />
    </section>
  )
}

export default Content