import React from 'react';
import styled from 'styled-components';


const CategoriesWrapper = styled.div`
margin-bottom: 3rem;
padding: 3rem 0;
border-top: solid 1px ${props => props.theme.colors.border1};
border-bottom: solid 1px ${props => props.theme.colors.border1};

-webkit-animation: fade-in-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.4s both;
        animation: fade-in-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.4s both;

        @-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
`;


const CategoriesContainer = ({ children }) => {

    return (
        <CategoriesWrapper>
            {children}
        </CategoriesWrapper>
    )
}

export default CategoriesContainer;
