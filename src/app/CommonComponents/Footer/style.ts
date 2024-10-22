
import Link from "next/link";
import styled from "styled-components";

export const FooterSection = styled.section`
       width: 100vw;
       border-top: 1px solid ${({ theme }) => theme.colors.primary};

       
`

export const FooterContainer = styled.div`
       display: flex;
       flex-direction: column;
       gap: 20px;

`

export const FooterUpperContainer = styled.div`
       background-color: ${({ theme }) => theme.colors.white};
       display: flex;
       justify-content: space-around;
       padding: 20px 0px;
      
`

export const FooterBottomContainer = styled.div`
      display: flex;
      justify-content:  space-around;
      background-color:${({ theme }) => theme.colors.primary};
      padding: 20px 0px ;
   
`

export const FooterLeftContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;

`

export const FooterRightContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;
`
export const FooterLinks = styled.div`
      display: flex;
      gap: 25px;

`
export const FooterForm = styled.div`
      display: flex;
      gap: 3px;
`
export const LinkItem = styled(Link)`
     color: ${({ theme }) => theme.colors.white};
`