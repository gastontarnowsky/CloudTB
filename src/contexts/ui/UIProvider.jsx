import { useState } from 'react';
import { links } from './UILinks';
import { UIContext } from '.';

const UIProvider = ({children}) => {
    
    const [modal, setModal] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const handleModal = () => setModal(!modal);

    const handleSidebar = ()=> setSidebar(!sidebar);

    return (
        <UIContext.Provider
            value={{
                modal,
                links,
                handleModal,
                sidebar,
                setSidebar,
                handleSidebar
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export default UIProvider;