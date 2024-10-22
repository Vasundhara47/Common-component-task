"use client"
import React from 'react'
import { Card, CardContainer, HeadingContainer, SectionContainer } from './style'
import Icon from '../Common/Icon/icon'
import Text from '../Common/Text'



function Reputation() {


    return (
        <SectionContainer>
            <HeadingContainer>
                <Text variant='Headline2' fontWeight='800' color='terniry'>Our Reputation</Text>
            </HeadingContainer>
            <CardContainer>
                <Card>
                    <Icon icon='how_to_vote' color='#F9995D' />

                    <Text variant='Headline4' fontWeight='800' color='terniry'>Best Services</Text>
                    <Text variant='body2' fontWeight='terniry' color='gray'>Lorem ipsum dolor sit amet consectetur adipisicing </Text>
                </Card>
                <Card>
                    <Icon icon='headset_mic' color='orange' />
                    <Text variant='Headline4' fontWeight='800' color='terniry'>Best Services</Text>
                    <Text variant='body2' fontWeight='terniry' color='gray'>Lorem ipsum dolor sit amet consectetur adipisicing </Text>
                </Card>
                <Card>
                    <Icon icon='local_police' color='orange' />
                    <Text variant='Headline4' fontWeight='800' color='terniry'>Best Services</Text>
                    <Text variant='body2' fontWeight='terniry' color='gray'>Lorem ipsum dolor sit amet consectetur adipisicing</Text>
                </Card>
            </CardContainer>
        </SectionContainer>
    )
}

export default Reputation
