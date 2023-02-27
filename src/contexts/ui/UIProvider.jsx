import { useState } from 'react';
import { links } from './UILinks';
import { UIContext } from '.';

const UIProvider = ({children}) => {
    
    const [modal, setModal] = useState(false);

    const handleModal = () => setModal(!modal);

    return (
        <UIContext.Provider
            value={{
                modal,
                links,
                handleModal,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export default UIProvider;