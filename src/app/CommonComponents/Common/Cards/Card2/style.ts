import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 40px 30px;
    gap: 22px;
    border-radius: 2px;
    

    Button{
        margin-top: 30px;
    }
`

