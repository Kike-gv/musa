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
color: ${props => props.theme.colors.themeGrad1};
font-size: ${props => props.theme.fontSizes.large};
font-weight: bold;
`;
const Text2 = styled.p`
color: ${props => props.theme.colors.blue3};
font-size: ${props => props.theme.fontSizes.titleMedium};
font-weight: bold;
`;

const DescriptionText = ({intro}) => {

    return (
        <DescriptionTextWrapper>
            <Text1>{intro && intro[0].motto1}</Text1>
            <Text2>{intro && intro[0].motto2}</Text2>
        </DescriptionTextWrapper>
    )
}

export default DescriptionText;
