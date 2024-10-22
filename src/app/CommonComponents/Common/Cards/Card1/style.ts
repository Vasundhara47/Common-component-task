import styled from "styled-components";

export const CardContainer = styled.div`
      background-color: ${({ theme }) => theme.colors.terniry};
      border: 1px solid #E0E3EB;
      border-radius: 3px;
      padding: 14.63px 29.27px 14.63px 14.63px;
      gap: 13.17px;
`

export const IconWrapper = styled.div`
      font-size: 16px;
`
export const Icon = styled.span`
      color :${({ theme }) => theme.colors.secondary} ;
`