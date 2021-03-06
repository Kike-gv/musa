import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import FontAwesomeIcons from '../FontAwesomeIcons';

// import {
//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     Link
// } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


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

const MenuWrapperMobile = styled.div`
width: 100%;
`;
const MenuWrapperIcon = styled.div`
width: 100%;
`;
const MenuWrapperMobileLinks = styled.div`
background-color: ${props => props.theme.colors.themeGrad1};    
margin: -1rem;
padding: 1rem;
-webkit-animation: fade-in-top 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0s both;
        animation: fade-in-top 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0s both;

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
const MenuWrapperMobileLinksList = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding: 0;
`;
const MenuItemMobile = styled.li`
padding: 1rem;
font-weight: bold;
`;

const Menu = ({ isMobile, navigation }) => {
    const themeContext1 = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isMobile && <MenuWrapper>
                {navigation && navigation.map(item => <MenuItem><Link to={item.link}><MenuLink>{item.title}</MenuLink></Link></MenuItem>)}
            </MenuWrapper>}
            {isMobile && <MenuWrapperMobile>
                {!isOpen && <MenuWrapperIcon onClick={() => setIsOpen(true)} ><FontAwesomeIcons icon={'bars'} color={themeContext1.colors.textInverse} /></MenuWrapperIcon>}
                {isOpen && <MenuWrapperMobileLinks>
                    <MenuWrapperIcon onClick={() => setIsOpen(false)} ><FontAwesomeIcons icon={'times'} color={themeContext1.colors.textInverse} /></MenuWrapperIcon>

                    <MenuWrapperMobileLinksList>
                        {navigation && navigation.map(item => <MenuItemMobile><Link to={item.link}><MenuLink>{item.title}</MenuLink></Link></MenuItemMobile>)}
                    </MenuWrapperMobileLinksList>
                </MenuWrapperMobileLinks>}

            </MenuWrapperMobile>}
        </>
    )
}

export default Menu;
