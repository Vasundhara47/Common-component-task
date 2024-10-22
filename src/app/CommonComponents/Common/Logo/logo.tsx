import React from 'react'
import { LogoContainer, LogoText } from './logo.style'
import { LogoProps } from './types'

function Logo({ color }: LogoProps) {

    return (
        <LogoContainer>
            <LogoText color={color}>TheBox</LogoText>
        </LogoContainer>
    )
}

export default Logo
