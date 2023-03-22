import { useContext, useEffect, useState } from 'react';
import { UIContext } from '../contexts';
import {  RiMenuFill, RiCloseLine } from "react-icons/ri";
import {
  Header,
  Presentation,
  Modal,
  CardsPresentation,
  About,
  Footer,
  Descriptions
} from '../components';

export const HomePage = () => {

  const { modal, sidebar, setSidebar, handleSidebar } = useContext(UIContext);

  
  useEffect(()=>{
    setSidebar(!sidebar)
  }, [modal])
  return (
    <>
      <div className={`relative z-40`}>
        <Header />
        <button onClick={handleSidebar} className='fixed bottom-0 right-0 mb-4 mr-4 lg:hidden bg-azulOscuro bg-opacity-70 p-2 text-white rounded-full text-2xl z-50'>
          {sidebar ? <RiCloseLine /> : <RiMenuFill />}
        </button>
        <Presentation /> 
        <Descriptions />
        {/*** SOBRE NOSOTROS ***/}
        <About />
        {/*** FOOTER ***/}
        <Footer />
      </div>
      <Modal />
    </>
  )
}