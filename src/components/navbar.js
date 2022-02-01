import * as s from '../styles/styles.js';
import React, {useState} from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNavBar = () => {
    if(toggleMenu == false){
        setToggleMenu(true);
    }else{
        setToggleMenu(false);
    }
    console.log(toggleMenu);
}
    return(
        <s.Nav pad='10px'bg='white'>
            <s.NavItem  to="/">Home</s.NavItem>
            <s.NavItem  to="mint">Mint</s.NavItem>
            <s.NavItem  to="wallet">Wallet</s.NavItem>
            <s.NavToggle onClick={toggleNavBar}>+</s.NavToggle>
        </s.Nav>
    );
}

export const NavBarMobile = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNavBar = () => {
    if(toggleMenu == false){
        setToggleMenu(true);
    }else{
        setToggleMenu(false);
    }
    console.log(toggleMenu);
}
    return(
        toggleMenu == false ?(
        <s.MobileNav bg="white" pad='10px'>
            <s.NavToggle onClick={toggleNavBar}>
                <s.Icon icon={faBars}></s.Icon>
            </s.NavToggle>
        </s.MobileNav>
        ):(
        <s.MobileNav pad='10px' bg="white">

            <s.NavItem  to="/">Home</s.NavItem>
            <s.NavItem  to="mint">Mint</s.NavItem>
            <s.NavItem  to="wallet">Wallet</s.NavItem>

            <s.NavToggle onClick={toggleNavBar}>
                <s.Icon icon={faBars}></s.Icon>
            </s.NavToggle> 

        </s.MobileNav>       
       
        )
    );
}