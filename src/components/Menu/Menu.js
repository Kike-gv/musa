import React from 'react';
import styled from 'styled-components';


const MenuWrapper = styled.ul`
list-style-type: none;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
padding: 0;
`;

const MenuItem = styled.li`
padding: 0 1rem;
font-weight: bold;
`;

const MenuLink = styled.a`
text-decoration: none;
color: ${props => props.theme.colors.textInverse};
opacity: 0.9;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 1;
}
`;

const Menu = () => {

    return (
        <MenuWrapper>
            <MenuItem><MenuLink href="#">Quiénes somos</MenuLink></MenuItem>
            <MenuItem><MenuLink href="#">Qué ofrecemos</MenuLink></MenuItem>
            <MenuItem><MenuLink href="#">Trayectoria</MenuLink></MenuItem>
            <MenuItem><MenuLink href="#">Contáctanos</MenuLink></MenuItem>
        </MenuWrapper>
    )
}

export default Menu;
