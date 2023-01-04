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
                        Encryption Tool
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        activeStyle={{ color: 'black' }}
                    >
                        ASCII Conversion
                    </NavLink>
                    <NavLink
                        to="/signin"
                        activeStyle={{ color: 'black' }}
                    >
                        Contact
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/sign-up">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav> 
        </>
    );
};
export default Navbar;