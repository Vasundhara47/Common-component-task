import React from 'react'
import { StyledButton } from './style'
import Text from '../../Text'
import { ButtonProps } from '../Button2/types'

function Button({ title }: ButtonProps) {

    return (
        <StyledButton>
            <Text color="white" variant="Link" fontWeight="700">{title}</Text>
        </StyledButton>
    )
}

export default Button
