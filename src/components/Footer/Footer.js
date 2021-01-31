import React from 'react';
import styled from 'styled-components';


const TitleWrapper = styled.p`
width: 100%;
text-align: center;
padding: 2rem;
font-size: ${props => props.theme.fontSizes.medium};
color: ${props => props.theme.colors.text2};
`;



const Footer = ({ footer }) => {

    return (
        <TitleWrapper > {footer && footer[0].text} </TitleWrapper>
    )
}

export default Footer;
