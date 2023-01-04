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
                        to="/encryption"
                        activeStyle={{ color: 'black' }}
                    >
                        Encryption Tool
                    </NavLink>
                    <NavLink 
                        to="/ascii" 
                        activeStyle={{ color: 'black' }}
                    >
                        ASCII Conversion
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activeStyle={{ color: 'black' }}
                    >
                        Contact
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav> 
        </>
    );
};
export default Navbar;