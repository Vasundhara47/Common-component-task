import styled from "styled-components";

export const SectionContainer = styled.section`
     display:  flex;
     flex-direction: column;
     padding: 40px;
     gap: 30px;
     justify-content: center;
     align-items: center;
`

export const HeadingContainer = styled.div`

`

export const CardContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
`

export const Card = styled.div`
     box-sizing: border-box;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: flex-start;
     padding: 14.6346px 14.6346px 29.2693px;
     gap: 13.17px;
    
     width: 213.67px;
     height: 144.52px;
     left: calc(50% - 213.67px/2 - 0.15px);
     top: 111.22px;
     background: #FFFFFF;
     border: 1.02443px solid #E0E3EB;
     border-radius: 2.92693px;
`
export const Icon = styled.div`
     color:  ${({ theme }) => theme.colors.secondary};
`

