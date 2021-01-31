import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Cat1Text from '../../icons/Cat1Text';
import Cat2Text from '../../icons/Cat2Text';
import Cat3Text from '../../icons/Cat3Text';
import Cat4Text from '../../icons/Cat4Text';
import Cat5Text from '../../icons/Cat5Text';




// const MOBILE_SIZE = 650;
// const isMobile = window.innerWidth < MOBILE_SIZE;
// const logoTextSize = isMobile ? 10 : 13;
// const logoSize = `${logoTextSize}rem`;

const CategoriesWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const LogoWrapper = styled.div`
width: ${props => props.logoSize};
height: ${props => props.logoSize};
position: relative;
`;

const CategoryImg = styled.img`
position: absolute;
top: 0;
left: 0;
width: ${props => props.logoSize};
height: ${props => props.logoSize};
`;

const CategoryText = styled.div`
position: relative;
width: ${props => props.logoSize};
height: ${props => props.logoSize};
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


const CategoriesMenu = ({ isMobile, obj, click }) => {

    const [logoTextSize, setLogoTextSize] = useState();
    const [logoSize, setLogoSize] = useState();


    // useEffect(() => {
    //     setLogoTextSize(isMobile ? 10 : 13);
    // },[]);
    useEffect(() => {
        setLogoTextSize(isMobile ? 10 : 13);
    }, [isMobile]);

    useEffect(() => {
        setLogoSize(`${logoTextSize}rem`);
    }, [logoTextSize]);


    return (
        <CategoriesWrapper>

            <LogoWrapper logoSize={logoSize} onClick={() => click(1)}>
                <CategoryImg logoSize={logoSize} src={obj && obj[0].bg1} />
                <CategoryText logoSize={logoSize}><Cat1Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper logoSize={logoSize} onClick={() => click(2)}>
                <CategoryImg logoSize={logoSize} src={obj && obj[0].bg2} />
                <CategoryText logoSize={logoSize}><Cat2Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper logoSize={logoSize} onClick={() => click(3)}>
                <CategoryImg logoSize={logoSize} src={obj && obj[0].bg3} />
                <CategoryText logoSize={logoSize}><Cat3Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper logoSize={logoSize} onClick={() => click(4)}>
                <CategoryImg logoSize={logoSize} src={obj && obj[0].bg4} />
                <CategoryText logoSize={logoSize}><Cat4Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper logoSize={logoSize} onClick={() => click(5)}>
                <CategoryImg logoSize={logoSize} src={obj && obj[0].bg5} />
                <CategoryText logoSize={logoSize}><Cat5Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

            <LogoWrapper logoSize={logoSize} onClick={() => click(6)}>
                <CategoryImg logoSize={logoSize} src={obj && obj[0].bg6} />
                <CategoryText logoSize={logoSize}><Cat5Text size={logoTextSize} /></CategoryText>
            </LogoWrapper>

        </CategoriesWrapper>
    )
}

export default CategoriesMenu;
