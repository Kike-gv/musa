import React from 'react';
import styled from 'styled-components';


const TitleWrapper = styled.p`
width: 100%;
text-align: center;
padding: 2rem;
font-size: ${props => props.theme.fontSizes.medium};
font-weight: 700;
letter-spacing: 3px;
color: ${props => props.theme.colors.text2};
`;



const Title = ({ text= 'introduce un titulo' }) => {

    return (
        <TitleWrapper > {text} </TitleWrapper>
    )
}

export default Title;
