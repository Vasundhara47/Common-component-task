
import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    padding: 11.71px 14.63px;
    border-radius: 3px;
    text-align: center;
    width: 160px;
`