import React from 'react'
import { CardContainer } from './style'
import Text from '../../Text'
import Button from '../../Buttons/Button2'
import { CardProps } from './types'

function Card({ title, text, button }: CardProps) {


    return (
        <CardContainer>
            <Text variant='Headline2' fontWeight='700' color='white'>{title}</Text>
            <Text variant='body1' fontWeight='500' color='white'>{text}</Text>
            <Button title='More on Our History'></Button>


        </CardContainer>
    )
}

export default Card
