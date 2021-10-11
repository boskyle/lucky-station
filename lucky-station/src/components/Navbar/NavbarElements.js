import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


export const Nav = styled.nav`
    background:#A2D2FF;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`


// export const NavLogo = styled(NavLink)`
//     color: #F6416C;
//     justify-self: flex-start;
//     cursor: pointer;
//     font-size:  1.5rem;
//     display:    flex;
//     align-items:    center;
//     margin-left:    24px;
//     font-weight: bold;
//     text-decoration: none;
//     border-radius: 20%;


// `


export const MobileIcon = styled.div`
 
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position absolute;
        top: 0.5em;
        right: 1em;
        transform: translate (-100%, 60%);
        font-size: 1em;
        cursor: pointer;
        font-size: 2em;
        color:#468bd4;
    }
`

export const NavMenu = styled.ul`
    
    display:flex;
    align-items:center;
    justify-content: start;
    list-style: none;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 768px) {
        display: none;
    }

`;


export const NavItem = styled.li`
    height: 80px;
    color: #F6416C;
`

export const NavLinks = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0.25em 2em;
    padding: 0em 0em;
    height: 100%;
    cursor: pointer;
    font-size: 1.5em;
    text-underline-offset: 7px;   


    color: #23049D;
    &:hover {
        text-decoration: underline;
    }

    &.active{
        text-decoration: underline;
    } 

`



