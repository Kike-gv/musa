import React from 'react';
import styled from 'styled-components';

import Cat1Text from '../../icons/Cat1Text';
import Cat2Text from '../../icons/Cat2Text';
import Cat3Text from '../../icons/Cat3Text';
import Cat4Text from '../../icons/Cat4Text';
import Cat5Text from '../../icons/Cat5Text';




const logoTextSize = 13;
const logoSize = `${logoTextSize}rem`;

const CategoriesWrapper = styled.div`
width: 100%;
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
fill: ${props => props.theme.colors.black};
transition: fill 0.4s;
    &:hover{
    transition: fill 0.4s;
    fill: ${props => props.theme.colors.white};
    cursor: pointer;
    }
};
`;

const CategoriesMenu = ({ obj, click }) => {

    return (
        <CategoriesWrapper>

            <LogoWrapper onClick={() => click(1)}>
                <CategoryImg src={obj && obj[0].bg1} />
                <CategoryText><Cat1Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper onClick={() => click(2)}>
                <CategoryImg src={obj && obj[0].bg2} />
                <CategoryText><Cat2Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper onClick={() => click(3)}>
                <CategoryImg src={obj && obj[0].bg3} />
                <CategoryText><Cat3Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper onClick={() => click(4)}>
                <CategoryImg src={obj && obj[0].bg4} />
                <CategoryText><Cat4Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper onClick={() => click(5)}>
                <CategoryImg src={obj && obj[0].bg5} />
                <CategoryText><Cat5Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper onClick={() => click(6)}>
                <CategoryImg src={obj && obj[0].bg6} />
                <CategoryText><Cat5Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

        </CategoriesWrapper>
    )
}

export default CategoriesMenu;
