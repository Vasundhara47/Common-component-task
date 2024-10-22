"use client"
import React from 'react'
import { AboutSection, CardContainer, ImageContainer } from './style'
import Card from '../Common/Cards/Card2'

function AboutUs() {

    return (
        <AboutSection>
            <ImageContainer></ImageContainer>
            <CardContainer>
                <Card
                    title='About us'
                    text='For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.'
                    button
                >
                </Card>
            </CardContainer>

        </AboutSection>

    )
}

export default AboutUs
