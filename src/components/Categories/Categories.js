import React from 'react';
import styled from 'styled-components';

import Cat1Text from '../../icons/Cat1Text';
import Cat2Text from '../../icons/Cat2Text';
import Cat3Text from '../../icons/Cat3Text';
import Cat4Text from '../../icons/Cat4Text';
import Cat5Text from '../../icons/Cat5Text';



const logoSize = '15rem';
const logoTextSize = 15;

const CategoriesWrapper = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const LogoWrapper = styled.div`
width: ${logoSize};
height: ${logoSize};
position: relative;
`;

const CategoryImg = styled.img`
position: absolute;
top: 0;
left: 0;
width: ${logoSize};
height: ${logoSize};
`;

const CategoryText = styled.div`
position: relative;
width: ${logoSize};
height: ${logoSize};
svg{
fill: ${props =>props.theme.colors.black};
transition: fill 0.4s;
    &:hover{
    transition: fill 0.4s;
    fill: ${props =>props.theme.colors.white};
    cursor: pointer;
    }
};
`;

const Categories = () => {

    return (
        <CategoriesWrapper>

            <LogoWrapper>
                <CategoryImg src={require('../../icons/lila1.png')} />
                <CategoryText><Cat1Text size={logoTextSize} /></CategoryText>   
            </LogoWrapper>

            <LogoWrapper>
                <CategoryImg src={require('../../icons/turquesa1.png')} />
                <CategoryText><Cat2Text size={logoTextSize} /></CategoryText>   
            </LogoWrapper>

            <LogoWrapper>
                <CategoryImg src={require('../../icons/verd1.png')} />
                <CategoryText><Cat3Text size={logoTextSize} /></CategoryText>   
            </LogoWrapper>

            <LogoWrapper>
                <CategoryImg src={require('../../icons/groc1.png')} />
                <CategoryText><Cat4Text size={logoTextSize} /></CategoryText>   
            </LogoWrapper>

            <LogoWrapper>
                <CategoryImg src={require('../../icons/rosa1.png')} />
                <CategoryText><Cat5Text size={logoTextSize} /></CategoryText>   
            </LogoWrapper>

        </CategoriesWrapper>
    )
}

export default Categories;
