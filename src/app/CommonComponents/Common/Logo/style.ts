import styled from "styled-components";
import { LogoProps } from "./types";

export const LogoContainer = styled.div`
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
`

export const LogoText = styled.h2<LogoProps>`
      color: ${({ color, theme }) => color || theme.colors.primary};
      font-style: italic;
      font-size: ${({ theme }) => theme.fontSize.Headline3};
      font-size: 25px;
      font-weight: 800;
`