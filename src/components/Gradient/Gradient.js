import React from 'react';
import styled from 'styled-components';


const GradientWrapper = styled.div`
background-image: linear-gradient( ${props => props.theme.colors.themeGrad1},  ${props => props.theme.colors.themeGrad2},  ${props => props.theme.colors.themeGrad3}, ${props => props.theme.colors.themeGrad4});
width: 100%;
height: 45vh;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Gradient = ({ children }) => {

    return (
        <GradientWrapper>{children}</GradientWrapper>
    )
}

export default Gradient;