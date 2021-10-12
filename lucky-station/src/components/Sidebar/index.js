import React from 'react'
import {Sidebarcontainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink} from './SidebarElements';
const Sidebar = () => {
    return (
        <Sidebarcontainer>
            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/home'>Home</SidebarLink>
                    <SidebarLink to='/about'>About</SidebarLink>
                    <SidebarLink to='/blog'>Blog</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </Sidebarcontainer>


    )
}

export default Sidebar;

