import React,{useState,createContext} from 'react'


export const NavbarContext = createContext();





export const NavbarProvider = (props) => {
        const [isOpen,setIsOpen] = useState(false);

    return (
        <NavbarContext.Provider value={[isOpen,setIsOpen]}>
            {props.children}
        </NavbarContext.Provider>
    );

}