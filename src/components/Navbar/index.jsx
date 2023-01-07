import React from "react";
import { UserAuth } from "../../context/AuthContext";
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

    const { user, logOut } = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const{ googleSignIn } = UserAuth()

    const handleGoogleSignIn = async () => {
        try {
        await googleSignIn().then(() => {
            window.location.assign('/')})
        } catch (error) {
        console.log(error)
        }
    }


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
                        activestyle={{ color:'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/encryption"
                        activestyle={{ color: 'black' }}
                    >
                        Encryption Tool
                    </NavLink>
                    <NavLink 
                        to="/ascii" 
                        activestyle={{ color: 'black' }}
                    >
                        ASCII Conversion
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activestyle={{ color: 'black' }}
                    >
                        Contact
                    </NavLink>
                    <NavBtn>
                        {user?.displayName ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleGoogleSignIn}>Sign In</button>}
                    </NavBtn>
                </NavMenu>
            </Nav> 
        </>
    );
};
export default Navbar;