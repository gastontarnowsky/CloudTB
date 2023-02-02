

const Modal = ({handleModal}) => {
  return (
    <div className="fixed inset-0 z-50 hover:cursor-pointer" onClick={handleModal}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75"></div>

            <div className="hidden sm:inline-block sm:align-middle sm:h-screen"></div>

            <form onClick={(e) => e.stopPropagation()}  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full hover:cursor-auto">
                <div className="px-4 m-5 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                    <div className="sm:flex sm:items-start gap-4 ">

                        {/*** Icon Email ***/}
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 sm:mx-0">
                            <svg 
                                className="w-12 h-12 text-blue-600 fill-current"
                                xmlns="http://www.w3.org/2000/svg" 
                            >
                                <path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z"/>
                            </svg>
                        </div>
                        
                        {/*** Text, Inputs and sumbit ***/}
                        <div className="text-center mt-3 sm:mt-0 sm:ml-0  sm:text-left text-black">
                            <h2 className="text-xl text-black mt-4">¿En qué te podemos ayudar?</h2>
                            
                            <input className="bg-white border-b-2  border-indigo-400 mt-8 w-full p-1 " type="text" placeholder="Nombre y apellido"/>
                            <input className="bg-white border-b-2 border-indigo-400 mt-8 w-full p-1 " type="email" placeholder="Email"/>
                            <input className="bg-white border-b-2 border-indigo-400 mt-8 w-full p-1 " type="text" placeholder="Tel"/>
                            <textarea className="bg-white border-b-2 border-indigo-400 mt-8 w-full p-1 " placeholder="Describe tu proyecto"/>
                        
                            <div className="mt-8 mb-3 p-2 w-full text-center font-bold text-indigo-400 hover:text-white bg-white hover:bg-indigo-600 border-2 border-indigo-400 hover:border-indigo-600 rounded-md cursor-pointer transform transition-all">
                                <button className="">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Modal