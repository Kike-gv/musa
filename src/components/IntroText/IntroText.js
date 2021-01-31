import React from 'react';
import styled from 'styled-components';


const DescriptionTextWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Text1 = styled.p`
color: ${props => props.theme.colors.text1};
font-size: ${props => props.theme.fontSizes.medium};
text-align: center;
width: 80%;
max-width: 75rem;
margin-top: 6rem;
`;
const Text1a = styled.p`
color: ${props => props.theme.colors.text1};
font-size: ${props => props.theme.fontSizes.medium};
text-align: center;
width: 80%;
max-width: 75rem;
`;

const Flexed = styled.div`
margin-top: 2rem;
margin-bottom: 4rem;
width: 80%;
max-width: 75rem;
`;

const Text2 = styled.p`
color: ${props => props.theme.colors.text1};
font-size: ${props => props.theme.fontSizes.titleExtraSmall};
font-weight: bold;
text-align: center;
`;

const Text3 = styled.span`
color: ${props => props.theme.colors.blue3};
font-size: ${props => props.theme.fontSizes.titleExtraSmall};
font-weight: bold;
`;

const IntroText = ({ intro }) => {

    return (
        <DescriptionTextWrapper>
            <Text1>{intro && intro[0].text1}</Text1>
            <Text1a>{intro && intro[0].text2}</Text1a>
            <Flexed>
                <Text2>{intro && intro[0].quote1} <Text3>{intro && intro[0].quote2}</Text3></Text2>  
            </Flexed>
        </DescriptionTextWrapper>
    )
}

export default IntroText;
