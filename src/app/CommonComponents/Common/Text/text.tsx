"use client"
import React from 'react';
import { TextProps } from './typex';
import { StyledText } from './style';

interface Props extends TextProps { }

function Text({ variant, fontWeight, color, children }: Props) {
    return (
        <StyledText variant={variant} fontWeight={fontWeight} color={color}>
            {children}
        </StyledText>
    );
}

export default Text;
