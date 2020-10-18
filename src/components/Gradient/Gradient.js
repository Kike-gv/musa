import React from 'react';
import styled from 'styled-components';


const GradientWrapper = styled.div`
 background-image: linear-gradient( rgba(146, 127, 180, 1), rgba(82, 127, 180, 0.4), rgba(146, 153, 180, 0.1));
 width: 100%;
 height: 70vh;
`;

const Gradient = ({children}) => {

    return (
        <GradientWrapper>{children}</GradientWrapper>
    )
}

export default Gradient;
