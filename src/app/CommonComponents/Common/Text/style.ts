import styled from 'styled-components';
import { TextProps } from './typex';

export const StyledText = styled.p<TextProps>`
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.d};
  font-size: ${({ variant, theme }) => theme.fontSize[variant] || theme.fontSize.defaultSize};
  font-weight: ${({ fontWeight, theme }) => fontWeight || theme.fontWeight.defaultWeight};
  /* font-family: ${({ theme }) => theme.fonts.primary}; */
  margin: 0;
`;
