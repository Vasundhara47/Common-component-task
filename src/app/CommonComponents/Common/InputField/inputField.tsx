import React from 'react'
import { InputProps } from './types'
import { StyledInputField } from './style'

function InputField({ placeholder = '', required = false, type = 'text', ...rest }: InputProps) {

    return (
        <StyledInputField
            placeholder={placeholder}
            type={type}
            required={required}
            {...rest}
        />
    )
}

export default InputField
