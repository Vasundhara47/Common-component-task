import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
`
export const Navbar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

`

export const LeftNavbar = styled.div`
    /* flex: 50%; */
`

export const RightNavbar = styled.div`
    /* flex: 50%; */
`
export const NavLinks = styled.div`
    display: flex;
    gap: 36.59px;
`

export const LinkItem = styled(Link)`
    color: ${({ theme }) => theme.colors.terniry};
    font-weight: 500;
    
    &:hover{
        color: ${({ theme }) => theme.colors.secondary};
    }
`