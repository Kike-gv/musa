import React from 'react';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const MenuWrapper = styled.ul`
list-style-type: none;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 0;
`;

const MenuItem = styled.li`
padding: 0 1rem;
font-weight: bold;
`;

const MenuLink = styled.p`
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
            <MenuItem><Link to="/aboutUs"><MenuLink>Quiénes somos</MenuLink></Link></MenuItem>
            <MenuItem><Link to="/"><MenuLink>Qué ofrecemos</MenuLink></Link></MenuItem>
            <MenuItem><Link><MenuLink>Trayectoria</MenuLink></Link></MenuItem>
            <MenuItem><Link to="/"><MenuLink>Contáctanos</MenuLink></Link></MenuItem>
        </MenuWrapper>
    )
}

export default Menu;
