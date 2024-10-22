import { ButtonPropsType } from "./types";
import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.terniry};
    padding: 3px 14.63;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 100%;
`
export const Arrow = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size:20px
`