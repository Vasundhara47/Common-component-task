import React from 'react'
import { ButtonPropsType } from './types'
import { StyledButton, Arrow } from './style'
import Text from '../../Text'

function Button({ title, leftArrow, rightArrow }: ButtonPropsType) {

    return (
        <StyledButton>
            {leftArrow &&
                <Arrow> &#x2190;</Arrow>
            }
            <Text color="white" variant="Link" fontWeight="terniry">{title}</Text>
            {rightArrow &&
                <Arrow> &#x2192;</Arrow>
            }

        </StyledButton>
    )
}

export default Button
