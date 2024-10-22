"use client"
import React from 'react'
import {
    HeaderContainer,
    Navbar,
    LeftNavbar,
    RightNavbar,
    NavLinks,
    LinkItem
} from './header.style'
import Logo from "../Common/Logo"

function Header() {

    return (
        <HeaderContainer>
            <Navbar>
                <LeftNavbar>
                    <Logo />
                </LeftNavbar>
                <RightNavbar>
                    <NavLinks>
                        <LinkItem href={"#"}>Home</LinkItem>
                        <LinkItem href={"#"}>About Us</LinkItem>
                        <LinkItem href={"#"}>Projects</LinkItem>
                        <LinkItem href={"#"}>Services</LinkItem>
                        <LinkItem href={"#"}>Contact Us</LinkItem>
                    </NavLinks>
                </RightNavbar>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header
