import React,{useContext} from 'react'
import {Sidebarcontainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink} from './SidebarElements';
import {NavbarContext} from '../Navbar/NavbarContext';





const Sidebar = () => {
    const [isOpen,setIsOpen] = useContext(NavbarContext);
    const toggleMe = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Sidebarcontainer isOpen={isOpen} toggleMe={toggleMe}>
            <Icon onClick={toggleMe}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/'  exact={true} onClick={toggleMe}>Home</SidebarLink>
                    <SidebarLink to='/about' exact={true}  onClick={toggleMe}>About</SidebarLink>
                    <SidebarLink to='/blog'  exact={true}  onClick={toggleMe}>Blog</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </Sidebarcontainer>


    )
}

export default Sidebar;

