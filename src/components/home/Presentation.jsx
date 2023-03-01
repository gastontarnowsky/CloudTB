import CompanySvg from '../../assets/company.svg';
import SoftwareSvg from '../../assets/software.svg';

export const Presentation = () => {


    return (
        <section className={`h-screen block relative w-full`}  id="presentacion">  
            <div className={'h-screen relative z-20 w-11/12 md:w-9/12 mx-auto'}>
                <div className='h-full flex flex-col justify-center items-start my-10 lg:my-0'>
                    <span className='font-bold tracking-wider text-xl text-white'>Bienvenida Innovación</span>
                    <div className='mt-2 py-4 rounded-lg '>
                        <h1 className='font-black text-8xl uppercase text-azulOscuro'>Cloud TB</h1>
                    </div>
                    <div className='relative flex justify-between'>
                        <div className="mt-4">
                            <p className="text-white w-1/2 md:w-5/12 lg:w-1/2 text-lg md:text-2xl text-justify font-medium">
                                Somos una empresa de desarrollo software donde abarcamos distintas areas y especialidades de la programación para poder ofrecerte el mejor producto.
                            </p>
                        </div>
                        <div className={`hidden md:flex xl:hidden absolute overflow-hidden z-10 top-0 lg:-top-10 right-0 bg-transparent`}>
                            <img src={SoftwareSvg} alt="Software Svg" className={'w-[300px] h-[400px] lg:w-[300px] lg:h-[400px]'} />
                        </div>
                    </div>
                    <div className='mt-8 w-full'>
                        <button
                            type='button'
                            className='text-white py-3 transition-all duration-300 md:w-1/4 w-full rounded-lg text-lg md:text-xl font-bold tracking-wider border-4 border-azulOscuro hover:bg-azulOscuro hover:text-white'
                        >Explora TB</button>
                    </div>
                </div>
            </div>
            <div className={`hidden xl:flex absolute overflow-hidden z-10 top-1/2 -translate-y-1/2 right-40 items-center justify-center bg-transparent`}>
                <img src={SoftwareSvg} alt="Software Svg" className={'mt-20 w-[400px] h-[500px]'} />
            </div>
            {/* <div className={`absolute overflow-hidden z-10 top-full -translate-y-1/2 left-20 rounded-full rounded-full bg-azul flex items-center justify-center bg-transparent`}>
                <img src={CompanySvg} alt={'Company Svg'} className='w-[500px] h-[400px]' />
            </div> */}
            <div 
                className='absolute z-0 bg-cover opacity-75 bg-top overflow-hidden w-full h-full top-0 left-0' 
                style={{ backgroundImage: 'linear-gradient(to top, rgba(248, 248, 253, 0.5), rgba(102, 182, 243, 0.99))', padding: '0 0 0 0' }}
            ></div>
        </section>
    )
}