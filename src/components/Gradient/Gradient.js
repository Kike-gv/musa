import React from 'react';
import styled from 'styled-components';


const GradientWrapper = styled.div`
background-image: linear-gradient( ${props => props.direction ? props.direction : '180deg'},${props => props.theme.colors.themeGrad1},  ${props => props.theme.colors.themeGrad2},  ${props => props.theme.colors.themeGrad3}, ${props => props.theme.colors.themeGrad4});
width: 100%;
height: ${props => props.height ? props.height : '45vh'};
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Gradient = ({ children, height, direction }) => {

    return (
        <GradientWrapper height={height} direction={direction}>{children}</GradientWrapper>
    )
}

export default Gradient;
