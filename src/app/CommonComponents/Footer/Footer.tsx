import React from 'react'
import Text from "../Common/Text"
import {
    FooterBottomContainer,
    FooterContainer,
    FooterLeftContainer,
    FooterRightContainer,
    FooterUpperContainer,
    FooterSection,
    FooterForm
} from './style'
import Logo from '../Common/Logo'
import InputField from '../Common/InputField'
import Button from '../Common/Buttons/Button3'

function Footer() {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterUpperContainer>
                    <FooterLeftContainer>
                        <div>
                            <div>
                                <Text color='primary' fontWeight='600' variant='body1'>ADDRESS:</Text>
                                <Text color='terniry' fontWeight='500' variant='body1'>6391 Elgin St. Celina, Delaware 10299</Text>
                            </div>
                            <div>
                                <Text color='primary' fontWeight='600' variant='body1'>ADDRESS:</Text>
                                <Text color='terniry' fontWeight='500' variant='body1'>6391 Elgin St. Celina, Delaware 10299</Text>
                            </div>
                            <div>
                                <Text color='primary' fontWeight='600' variant='body1'>ADDRESS:</Text>
                                <Text color='terniry' fontWeight='500' variant='body1'>6391 Elgin St. Celina, Delaware 10299</Text>
                            </div>
                        </div>
                        <div>
                            <Logo />
                        </div>
                    </FooterLeftContainer>
                    <FooterRightContainer>
                        <div>
                            <Text color='primary' fontWeight='600' variant='body1'>NEWSLETTER:</Text>
                            <FooterForm>
                                <InputField type='email' placeholder='enter your email here' />
                                <Button title='subscribe' />
                            </FooterForm>
                        </div>
                    </FooterRightContainer>
                </FooterUpperContainer>
                <FooterBottomContainer>

                    <Text variant='paragraph' color='white' fontWeight='500'>TheBox Company © 2022. All Rights Reserved</Text>
                    <div></div>
                </FooterBottomContainer>
            </FooterContainer>
        </FooterSection >
    )
}

export default Footer
