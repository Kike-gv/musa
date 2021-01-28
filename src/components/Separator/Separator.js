import React from 'react';
import styled from 'styled-components';


const SeparatorWrapper = styled.div`
width: 100%;
height: ${props => props.height}rem;
`;



const Separator = ({height}) => {

    return (
        <SeparatorWrapper height={height}>
        </SeparatorWrapper>
    )
}

export default Separator;
