import { useContext } from 'react';
import { UIContext } from '../contexts';
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

  const { modal } = useContext(UIContext);

  return (
    <>
      <div className={`relative z-40`}>
        <Header />
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