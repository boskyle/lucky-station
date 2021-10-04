import React from 'react';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
const Navbar = () => {
    return (
        <> 
        
            <Nav>
                <NavbarContainer>
                    {/* <NavLogo>lucky</NavLogo> */}
                    <MobileIcon>
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
        
        </>
        
    )
}

export default Navbar;