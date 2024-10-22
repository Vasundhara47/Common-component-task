import styled from "styled-components";

export const BannerContainer = styled.div`
    height: 673px;
    width: 100vw;
    background-image: linear-gradient(to left top, #2947a9,   #ffff);
`

export const BannerText = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.Headline1} ;
    color: ${({ theme }) => theme.colors.terniry};
    font-weight: 700;
    position: relative;
    top: 174px;
    left: 82px;
`

export const BannerCard = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 175px; 
    right: 0px; 
    width: 304px;
`

export const TopCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    padding: 15px 14px;
    text-align: center;
    gap: 12px;
`

export const BottomCardContainer = styled.div`
    display: flex;
    flex-direction: row;
     
     Button{
        flex: 50%;
     }
`

export const LeftButton = styled.div`
    border-right: 1px solid #E0E3EB; 
   flex: 50%;   
    text-align: center; 
`;


export const RightButton = styled.div`
    flex: 50%;  
    text-align: center; 
`;
