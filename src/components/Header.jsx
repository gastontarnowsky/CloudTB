

const Header = ({handleModal}) => {
  return (
    <header className="block md:flex py-7 px-5 lg:px-10 text-azul items-center text-center md:justify-between bg-white">
        <a href="/" className="block md:flex text-center items-center p-2 gap-4 hover:cursor-pointer">
            <img 
                className="w-10 hidden md:block "
                src="codda.png"
                alt="logo codda"
            />
            <h1 className="text-4xl font-bold tracking-[4px] font-shadows text-azul">CloudTB</h1>
        </a>
        
        <div className="gap-4 block lg:flex text-center ">
            <a  href="#sobrenosotros" className="font-rajdhani text-zinc-600 text-2xl px-3 py-1 border-2 border-transparent hover:border-zinc-400 rounded-xl transform transition-all">
                Sobre Nosotros
            </a>

            <button type="button" onClick={handleModal} className="text-lg font-chakra tracking-[1px] px-3 py-1 border-2 border-azul rounded-xl font-bold hover:bg-azul hover:text-white hover:border-zinc-600 hover:border-2 transform transition-all">
                <p>Contáctanos</p>
            </button>
        </div>

    </header>
  )
}

export default Header