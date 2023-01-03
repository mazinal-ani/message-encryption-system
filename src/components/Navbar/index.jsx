import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src='src/assets/terminal.png' height={40} width={40} />
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink 
                        to="/"
                        activeStyle={{ color:'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeStyle={{ color: 'black' }}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        activeStyle={{ color: 'black' }}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/signin"
                        activeStyle={{ color: 'black' }}
                    >
                        Sign In
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav> 
        </>
    );
};
export default Navbar;