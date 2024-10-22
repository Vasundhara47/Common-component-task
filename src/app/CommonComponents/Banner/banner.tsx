"use client"

import { BannerCard, BannerContainer, BannerText, BottomCardContainer, LeftButton, RightButton, TopCardContainer } from './style'
import Text from '../Common/Text'
import Button from '../Common/Buttons/Button1'



function Banner() {


    return (
        <BannerContainer>
            <BannerText>Heading</BannerText>
            <BannerCard>
                <TopCardContainer>
                    <Text color="white" variant="body1" fontWeight='secondary'>Feature Projects</Text>
                    <Text color="white" variant="Headline5" fontWeight='terniry'>The National University of Architecture</Text>
                </TopCardContainer>
                <BottomCardContainer>

                    <LeftButton>
                        <Button title='Back' leftArrow />
                    </LeftButton>
                    <RightButton>
                        <Button title='Next' rightArrow />
                    </RightButton>


                </BottomCardContainer>
            </BannerCard>

        </BannerContainer>
    )
}

export default Banner
