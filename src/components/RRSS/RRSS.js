import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import FontAwesomeIcons from '../FontAwesomeIcons';


const RRSSWrapper = styled.div`
 display: flex;
 align-items: center;
 flex-wrap: wrap;
`;
const IconWrapper = styled.a`
margin-right: 1rem;
`;

const RRSS = ({rrss}) => {
    const themeContext = useContext(ThemeContext);
    const socialMedia = rrss;


    return (
        <RRSSWrapper>
            {socialMedia && socialMedia.map(media => (
                <IconWrapper key={media.name} href={media.url} target="_blank">
                    <FontAwesomeIcons icon={media.icon} color={themeContext.colors.textInverse} isBrand/>
                </IconWrapper>
            ))}
        </RRSSWrapper>
    )
}

export default RRSS;
