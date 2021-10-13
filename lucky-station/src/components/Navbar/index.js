import React,{useContext} from 'react';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {NavbarContext} from './NavbarContext';
const Navbar = () => {

    const [isOpen,setIsOpen] = useContext(NavbarContext);

    const toggleMe = () => {
        setIsOpen(!isOpen);
    }

    return (
            <Nav>
                <NavbarContainer>
                    {/* <NavLogo>lucky</NavLogo> */}
                    <MobileIcon onClick={toggleMe}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks exact={true} to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks exact={true} to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks exact={true} to="/blog">Blog</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>  
        
        
        
    )
}

export default Navbar;