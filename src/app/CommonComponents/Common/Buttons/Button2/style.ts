
import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    padding: 11.71px 14.63px;
    border-radius: 5px;
    text-align: center;
    width: 160px;
`