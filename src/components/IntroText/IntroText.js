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
display: flex;
justify-content: center;
align-items: baseline;
margin-top: 2rem;
margin-bottom: 4rem;
`;

const Text2 = styled.p`
color: ${props => props.theme.colors.text1};
font-size: ${props => props.theme.fontSizes.titleExtraSmall};
font-weight: bold;
`;

const Text3 = styled.p`
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
                <Text2>{intro && intro[0].quote1}</Text2> &nbsp;&nbsp;
                <Text3>{intro && intro[0].quote2}</Text3>
            </Flexed>
        </DescriptionTextWrapper>
    )
}

export default IntroText;
