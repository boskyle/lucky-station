import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

export const Sidebarcontainer = styled.aside `
    position: fixed;
    z-index: 11;
    width: 100%;
    height: 100%;
    background: #74E0C0;
    dsplay: grid;
    align-items: center;
    top: 0;
    left: 0;
     opacity: ${({isOpen}) => (isOpen ? '100%':'0')};
     top:${({isOpen}) => (isOpen ? '0':'-100%')};
     transition: 0.3s ease-in-out;
`

export const CloseIcon = styled(FaTimes)`
    color:#0961B4;
`

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:

`


export const SidebarWrapper = styled.div`
    color: #fff;
    height: 100%;
    width: 100%;
`

export const SidebarMenu = styled.ul`
    display: flex;
    height: 100%;
    width: 100%;
    flex-flow: column wrap;
    align-items:center;
    justify-content:center;


`



export const SidebarLink  = styled(NavLink)`
    padding: 1em;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    color: #0961b4;
    cursor: pointer;

        &:hover {
            color: #0056B3;
            transition: 0.2s ease-in-out;
            text-decoration: none;
        }
        &.active {
            color: red;
        }
`


